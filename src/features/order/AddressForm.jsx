import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import useModal from "../../hooks/useModal";
import { editAddress } from "../../store/slices/userSlice";

const inputClassName = "border p-2 rounded-lg";

function AddressForm() {
  const {
    register,
    handleSubmit,
    formState: { dirtyFields, errors },
  } = useForm();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { dispatch: modal } = useModal();

  const onSubmit = async (obj) => {
    const updatedAddress = {};
    for (const key of Object.keys(dirtyFields)) {
      updatedAddress[key] = obj[key];
    }

    dispatch(editAddress(updatedAddress));
    modal({ type: "close" });
  };

  return (
    <form className="p-5 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-3">
        <h1>Address</h1>
        {(errors?.address?.message ||
          errors?.city?.message ||
          errors?.province?.message ||
          errors?.postalcode?.message) && (
          <p className="text-red-600 text-sm font-light">
            * กรุณากรอกข้อมูลให้ครบถ้วน
          </p>
        )}
      </div>
      <div className="flex flex-col gap-5">
        <textarea
          className={inputClassName}
          type="text"
          placeholder="ที่อยู่"
          rows={2}
          style={{ resize: "none" }}
          defaultValue={user?.address?.address}
          {...register("address", { required: "This field is required" })}
        />

        <input
          className={inputClassName}
          type="text"
          placeholder="เขต"
          defaultValue={user?.address?.city}
          {...register("city", { required: "This field is required" })}
        />
        <input
          className={inputClassName}
          type="text"
          placeholder="จังหวัด"
          defaultValue={user?.address?.province}
          {...register("province", { required: "This field is required" })}
        />
        <input
          className={inputClassName}
          type="text"
          placeholder="รหัสไปรษณีย์"
          defaultValue={user?.address?.postalcode}
          {...register("postalcode", { required: "This field is required" })}
        />
      </div>
      <button className="bg-green-500 text-white p-2">ยืนยัน</button>
    </form>
  );
}

export default AddressForm;

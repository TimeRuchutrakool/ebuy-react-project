import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import useModal from "../../hooks/useModal";
import { editAddress } from "../../store/slices/userSlice";

const inputClassName = "border p-2 rounded-lg";

function AddressForm() {
  const {
    register,
    handleSubmit,
    formState: { dirtyFields },
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
      <h1>Address</h1>
      <div className="flex flex-col gap-5">
        <input
          className={inputClassName}
          type="text"
          placeholder="บ้านเลขที่"
          defaultValue={user.address.houseNum}
          {...register("houseNum", { required: "This field is required" })}
        />
        <input
          className={inputClassName}
          type="text"
          placeholder="ตำบล"
          defaultValue={user.address.subDistrict}
          {...register("subDistrict", { required: "This field is required" })}
        />
        <input
          className={inputClassName}
          type="text"
          placeholder="อำเภอ"
          defaultValue={user.address.district}
          {...register("district", { required: "This field is required" })}
        />
        <input
          className={inputClassName}
          type="text"
          placeholder="เขต"
          defaultValue={user.address.zone}
          {...register("zone", { required: "This field is required" })}
        />
        <input
          className={inputClassName}
          type="text"
          placeholder="จังหวัด"
          defaultValue={user.address.province}
          {...register("province", { required: "This field is required" })}
        />
        <input
          className={inputClassName}
          type="text"
          placeholder="รหัสไปรษณีย์"
          defaultValue={user.address.zipcode}
          {...register("zipcode", { required: "This field is required" })}
        />
      </div>
      <button className="bg-green-500 text-white p-2">ยืนยัน</button>
    </form>
  );
}

export default AddressForm;

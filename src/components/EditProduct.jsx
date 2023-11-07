export default function EditProduct() {
  return (
    <div className=" w-[980px] h-[1080px] p-12  overflow-y-scroll ">
      <div className=" rounded-sm  bg-white shadow-default  dark:bg-boxdark  ">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-semibold text-xl text-black dark:white">
            Edit Product
          </h3>
        </div>

        <form action="">
          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black drark:text-white">
                เลือกหมวดหมู่สินค้า
              </label>
              <input
                type="text"
                className="w-full rounded border-[1.5px] border-storke bg-transparent py-3 px-5  outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-blue-800"
                placeholder="ชื่อสินค้า"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                เลือกหมวดหมู่ให้ตรงกับสินค้า
              </label>
              <input
                type="text"
                placeholder="รองเท้า"
                className="w-full rounded border-[1.5px] border-storke bg-transparent py-3 px-5  outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-blue-800"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                ประเภท
              </label>

              <input
                type="text"
                placeholder="ระบุสินค้า"
                className="w-full rounded border-[1.5px] border-storke bg-transparent py-3 px-5  outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-blue-800"
              />
            </div>
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                size
              </label>
              <input
                type="text"
                placeholder="ระบุสินค้า"
                className="w-full rounded border-[1.5px] border-storke bg-transparent py-3 px-5  outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-blue-800"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                สี
              </label>
              <input
                type="text"
                placeholder="ระบุสินค้า"
                className="w-full rounded border-[1.5px] border-storke bg-transparent py-3 px-5  outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-blue-800"
              />
            </div>

            <div className="p-12 border-gray-500 ">
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                name=""
              />
              <label className="file" htmlFor="file">
                Select Image for Upload
              </label>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                รายละเอียดสินค้า
              </label>
              <textarea
                cols="60"
                rows="6"
                className=" border border-gray-300 rounded-sm px-2 py-1.5"
              >
                ข้อมูลสภาพสินค้า
              </textarea>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                เบอร์โทรติดต่อ
              </label>
              <input
                type="text"
                placeholder="เบอร์โทรศัพท์มือถือ"
                className="w-full rounded border-[1.5px] border-storke bg-transparent py-3 px-5  outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-blue-800"
              />
            </div>
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black">สภาพสินค้า</label>

              <div className="flex justify-center  p-4 mb-5 ">
                <div className="flex  items-center border-solid border-2 border-indigo-600  px-4  ">
                  {" "}
                  <input
                    type="radio"
                    name="radio-2"
                    className="radio radio-primary "
                    checked
                  />
                  <label className="  m-2 px-5 text-black dark:text-white">
                    มือหนึ่ง
                  </label>
                </div>

                <div className="flex items-center  border-solid border-2 border-indigo-600 px-4  ">
                  {" "}
                  <input
                    type="radio"
                    name="radio-2"
                    className="radio radio-primary"
                  />
                  <label className=" m-2 px-5 text-black dark:text-white">
                    มือสอง
                  </label>
                </div>
              </div>
            </div>
            <small>
              กรุณาใส่เบอร์โทรที่คุณใช้สมัครสมาชิก เพื่อความปลอดภัยในการใช้งาน
              หากพบปัญหา สามารถติดต่อฝ่ายบริการลูกค้า
            </small>
            <div className="flex justify-center items-center p-5">
              <button
                type="submit"
                className=" bg-green-900 w-[120px] text-white px-4 py-1.5 rounded-md "
              >
                บันทึก
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

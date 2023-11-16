import { useSelector } from "react-redux";

export default function Reward() {
  const { user } = useSelector((store) => store.user);
  return (
    <div>
      <div>
        <img src="/src/assets/reward.jpg" />
      </div>
      <div className="flex justify-center pt-20">
        <div className="bg-[#1E4C2F] text-white h-56 w-56 flex flex-col gap-2 items-center justify-center  rounded-full mb-40">
          <p>คะแนนสะสมทั้งหมด</p>
          <p className="text-3xl">{user?.point}</p>
          <p>คะแนน</p>
        </div>
      </div>
      <div className="px-40 flex flex-col gap-20">
        <div className="flex justify-center items-center">
          <div>
            <img src="/src/assets/tesla.png" />
          </div>
          <div className="w-[500px] flex  flex-col gap-10 drop-shadow-xl">
            <div>
              <p className="text-3xl uppercase">tesla model 3</p>
              <p className="pt-2">
                <p className="text-lg">ระยะเวลาการแลกรับของรางวัล</p>
                ผู้แลกรับของรางวัลจะต้องดำเนินการแลกรับของรางวัลภายใน 30
                วันนับจากวันที่บันทึกคะแนนครบ 1,000,000 คะแนนขึ้นไป
                หากผู้แลกรับของรางวัลไม่ดำเนินการแลกรับของรางวัลภายในระยะเวลาที่กำหนด
                คะแนนสะสมที่ใช้แลกรับของรางวัลจะสูญหาย
              </p>
            </div>
            <div className="self-end">1,000,000 คะแนน</div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-[500px] flex  flex-col gap-10 drop-shadow-xl">
            <div>
              <p className="text-3xl uppercase">playstation 5</p>
              <p className="pt-2">
                <p className="text-lg">ระยะเวลาการแลกรับของรางวัล</p>
                ผู้แลกรับของรางวัลจะต้องดำเนินการแลกรับของรางวัลภายใน 30
                วันนับจากวันที่บันทึกคะแนนครบ 50,000 คะแนนขึ้นไป
                หากผู้แลกรับของรางวัลไม่ดำเนินการแลกรับของรางวัลภายในระยะเวลาที่กำหนด
                คะแนนสะสมที่ใช้แลกรับของรางวัลจะสูญหาย
              </p>
            </div>
            <div className="self-end">100,000 คะแนน</div>
          </div>
          <div className="w-[780px] h-[500px] flex justify-center items-center overflow-hidden">
            <img src="/src/assets/play5.png" />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-[780px] h-[500px] flex justify-center items-center overflow-hidden">
            <img src="/src/assets/iphone15.png" className="h-[500px]" />
          </div>
          <div className="w-[500px] flex  flex-col gap-10 drop-shadow-xl">
            <div>
              <p className="text-3xl uppercase">iphone 15</p>
              <p className="pt-2">
                <p className="text-lg">ระยะเวลาการแลกรับของรางวัล</p>
                ผู้แลกรับของรางวัลจะต้องดำเนินการแลกรับของรางวัลภายใน 30
                วันนับจากวันที่บันทึกคะแนนครบ 50,000 คะแนนขึ้นไป
                หากผู้แลกรับของรางวัลไม่ดำเนินการแลกรับของรางวัลภายในระยะเวลาที่กำหนด
                คะแนนสะสมที่ใช้แลกรับของรางวัลจะสูญหาย
              </p>
            </div>
            <div className="self-end">50,000 คะแนน</div>
          </div>
        </div>
      </div>
    </div>
  );
}

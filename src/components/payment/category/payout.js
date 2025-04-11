import { TbWallet } from "react-icons/tb";
export default function PayoutInfo() {
  return (
    <div className="bg-white w-full p-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-full bg-[#FFF0FB] p-3">
                <TbWallet className="w-[20px] h-[20px] text-[#a30162]" height='1em' width='1em'/>
              </div>
              <h4 className="text-[#0D080B] font-bold text-base md:text-2xl">Payout Information</h4>
            </div>
            <p className="text-[#767779] font-normal text-sm md:text-base">Payouts are processed within 24 hours after your event ends. Need it sooner? Request a withdrawal anytime.All transactions are securely processed with trusted financial partners.</p>
          </div>
  )
}
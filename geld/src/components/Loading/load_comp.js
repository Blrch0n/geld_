import Image from "next/image";

export default function LoadingSkeleton() {
  return (
    <section className="w-[172px] h-[184px] flex flex-col items-center justify-between">
      <Image src="logo_geld.svg"></Image>
      <div className="w-[123px] h-[72px] flex flex-col items-center justify-between">
        <span className="loading loading-spinner text-info"></span>
        <p className="text-[16px] text-[#0F172A] font-[600]">
          Түр хүлээнэ үү...
        </p>
      </div>
    </section>
  );
}

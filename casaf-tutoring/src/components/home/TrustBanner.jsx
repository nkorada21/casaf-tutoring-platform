import stars from "../../assets/stars-5-1.svg";

export default function TrustBanner() {
  return (
    <section className="w-full bg-[#2D2F4A] text-white py-14 px-6 text-center">
      <div className="max-w-4xl mx-auto">

        {/* ONE 5-star Trustpilot image */}
        <img 
          src={stars} 
          alt="TrustPilot Rating" 
          className="w-40 mx-auto mb-4" 
        />

        <h2 className="text-2xl md:text-3xl font-bold">
          See Why Students Have Voted Us #1 For Tutoring On TrustPilot
        </h2>

      </div>
    </section>
  );
}
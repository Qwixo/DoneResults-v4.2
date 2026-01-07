import { Check } from "lucide-react";

export function ScrollDemo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Headline and subheadline */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold text-black">
            Email Isn't Dead. It's Dominating.
          </h2>

          <p className="text-lg md:text-xl mt-6 text-gray-700 max-w-3xl mx-auto">
            Email marketing is expected to hit <strong>$13.7B</strong> in revenue by 2025 — and that's just the beginning.
          </p>
        </div>

        {/* Key points */}
        <div className="bg-gray-100 rounded-xl p-6 md:p-10 shadow-md mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 mt-1 text-green-500" />
                <p className="text-base md:text-lg">Direct line to decision-makers</p>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 mt-1 text-green-500" />
                <p className="text-base md:text-lg">Unmatched personalization</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 mt-1 text-green-500" />
                <p className="text-base md:text-lg">
                  One of the most trusted & measurable marketing channels
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 mt-1 text-green-500" />
                <p className="text-base md:text-lg">Still growing year after year</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width image */}
        <div className="flex justify-center mb-8">
          <img
            src="https://i.imgur.com/UVKhQle.jpeg"
            alt="Email Marketing Revenue Growth"
            className="rounded-xl shadow-lg max-w-5xl w-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "/images/email-marketing-growth-chart.png";
            }}
          />
        </div>

        {/* Italic text */}
        <p className="text-center italic text-gray-600 mt-6 mb-4">
          So if email is booming… how do you actually make it work?
        </p>
      </div>
    </section>
  );
}

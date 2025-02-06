const Features: React.FC = () => {
  return (
    <div className="text-center font-24px">
      <div>What makes our brand different</div>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div className="text-center">
          <div className="text-4xl mb-2">🚚</div>
          <h3 className="text-xl font-semibold text-gray-800">Next day as standard</h3>
          <div className="text-gray-600 mt-2">Order before 3pm and get your order the next day as standard.</div>
        </div>

        {/* Feature 2 */}
        <div className="text-center">
          <div className="text-4xl mb-2">🎨</div>
          <h3 className="text-xl font-semibold text-gray-800">Made by true artisans</h3>
          <div className="text-gray-600 mt-2">Handcrafted goods made with real passion and craftsmanship.</div>
        </div>

        {/* Feature 3 */}
        <div className="text-center">
          <div className="text-4xl mb-2">💸</div>
          <h3 className="text-xl font-semibold text-gray-800">Unbeatable prices</h3>
          <div className="text-gray-600 mt-2">For our materials and quality, you won’t find a better price.</div>
        </div>

        {/* Feature 4 */}
        <div className="text-center">
          <div className="text-4xl mb-2">♻</div>
          <h3 className="text-xl font-semibold text-gray-800">Recycled packaging</h3>
          <div className="text-gray-600 mt-2">We use 100% recycled packaging to ensure our footprint is manageable.</div>
        </div>
      </div>
    </div>
  );
};

export default Features;

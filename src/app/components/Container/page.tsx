const SignUp: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-800">
        Join the club and get the benefits
      </h2>
      
      <div className="text-lg text-center text-[gray-600] mt-4">
        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
      </div>
      
      <div className="mt-6 flex justify-center items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border border-gray-300 w-72"
        />
        <button className="px-4 py-2 bg-[#2A254B] text-[#FFFFFF]">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;

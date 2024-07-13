function Footer() {
  return (
    <>
      <div className=" bg-gray-900">
        <div className="max-w-2xl mx-auto text-white py-4">
          {/* <div className="text-center">
            <h3 className="text-3xl mb-3"> Download our Ecommerce App </h3>
            <p> Buy what you want. </p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">
                    <a href="https://play.google.com/store/apps/details?id=com.tataskybroadband&pli=1" target="_blank" rel="noopener noreferrer">Download on </a>
                  </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">
                      <a href="https://apps.apple.com/in/app/tata-play-fiber/id1377092720" target="_blank" rel="noopener noreferrer">Download on </a>
                  </p>
                  <p className="text-sm md:text-base"> Apple Store </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              {' '}
              © Tata Play Fiber, 2024.{' '}
            </p>
            <div className="order-1 md:order-2">
              <a className="px-2" href="https://www.tataplayfiber.com/about-us" target="_blank" rel="noopener noreferrer">About us</a>
              <a className="px-2 border-l" href="https://www.tataplayfiber.com/contact-us" target="_blank" rel="noopener noreferrer">Contact us</a>
              <a className="px-2 border-l" href="https://www.tataplayfiber.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

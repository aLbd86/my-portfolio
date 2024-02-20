import React from "react";

const Navigation = () => {
  return (
    <div className="hidden md:flex md:flex-col md:items-center md:justify-around md:fixed top-0 left-0 h-screen bg-neutral w-20 gap-10">
      {/* navbar - menu */}
      <div className=" flex items-center ">
        <ul
          className=" flex flex-row-reverse gap-12 items-center bg-neutral justify-center rotate-180"
          style={{ writingMode: "vertical-rl" }}>
          <li className="text-lg text-base-100">
            <a href="">Accueil</a></li>
          <li className="text-lg text-base-100"><a href="">Projets</a></li>
          <li className="text-lg text-base-100"><a href="">À propos</a></li>
        </ul>
      </div>

      {/* menu - social icons */}
      <div className="flex flex-col gap-6">
        <div className="flex">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              id="Vector"
              d="M30 4.28571C30 1.92188 28.0781 0 25.7143 0H4.28571C1.92188 0 0 1.92188 0 4.28571V25.7143C0 28.0781 1.92188 30 4.28571 30H25.7143C28.0781 30 30 28.0781 30 25.7143V4.28571ZM17.7991 25.1585C17.7991 25.0379 17.7991 24.7567 17.8058 24.3817C17.8125 23.6183 17.8125 22.4531 17.8125 21.4554C17.8125 20.4107 17.4643 19.7478 17.0558 19.3996C19.5335 19.125 22.1451 18.7835 22.1451 14.5045C22.1451 13.2857 21.7098 12.6763 21 11.8929C21.1138 11.6049 21.4955 10.4196 20.8862 8.87946C19.9554 8.59152 17.8259 10.0781 17.8259 10.0781C16.942 9.83036 15.9844 9.70313 15.0402 9.70313C14.096 9.70313 13.1384 9.83036 12.2545 10.0781C12.2545 10.0781 10.125 8.59152 9.1942 8.87946C8.58482 10.4129 8.95982 11.5982 9.08036 11.8929C8.37054 12.6763 8.03571 13.2857 8.03571 14.5045C8.03571 18.7634 10.5335 19.125 13.0112 19.3996C12.6897 19.6875 12.4018 20.183 12.3013 20.8929C11.6652 21.1808 10.0379 21.6763 9.06696 19.9621C8.45759 18.904 7.35938 18.817 7.35938 18.817C6.27455 18.8036 7.28571 19.5 7.28571 19.5C8.00893 19.8348 8.51786 21.1205 8.51786 21.1205C9.16741 23.1094 12.2746 22.4397 12.2746 22.4397C12.2746 23.0424 12.2813 23.8929 12.2813 24.4888C12.2813 24.8103 12.2879 25.0647 12.2879 25.1585C12.2879 25.4464 12.0871 25.7946 11.5179 25.6942C7.09821 24.2143 4.00446 20.0089 4.00446 15.0938C4.00446 8.94643 8.70536 4.27902 14.8527 4.27902C21 4.27902 25.9821 8.94643 25.9821 15.0938C25.9888 20.0089 22.9888 24.221 18.5692 25.6942C18.0067 25.7946 17.7991 25.4464 17.7991 25.1585ZM11.7388 21.4888C11.7254 21.3884 11.8125 21.3013 11.9397 21.2746C12.067 21.2612 12.1875 21.3147 12.2009 21.4018C12.221 21.4888 12.1339 21.5759 12 21.6027C11.8728 21.6295 11.7522 21.5759 11.7388 21.4888ZM11.1295 21.7031C10.9821 21.7165 10.8817 21.6429 10.8817 21.5424C10.8817 21.4554 10.9821 21.3817 11.1161 21.3817C11.2433 21.3683 11.3638 21.442 11.3638 21.5424C11.3638 21.6295 11.2634 21.7031 11.1295 21.7031ZM10.1719 21.5558C10.0446 21.529 9.95759 21.4286 9.98438 21.3415C10.0112 21.2545 10.1451 21.2143 10.2589 21.2411C10.3929 21.2813 10.4799 21.3817 10.4464 21.4688C10.4196 21.5558 10.2857 21.596 10.1719 21.5558ZM9.33482 21.067C9.23437 20.9799 9.20759 20.8527 9.27455 20.7924C9.33482 20.7188 9.46205 20.7321 9.5625 20.8326C9.64955 20.9196 9.68304 21.0536 9.62277 21.1071C9.5625 21.1808 9.43527 21.1674 9.33482 21.067ZM8.76562 20.3973C8.69196 20.2969 8.69196 20.183 8.76562 20.1362C8.83929 20.0759 8.95313 20.1228 9.01339 20.2232C9.08705 20.3237 9.08705 20.4442 9.01339 20.4978C8.95313 20.5379 8.83929 20.4978 8.76562 20.3973ZM8.34375 19.808C8.27009 19.721 8.2567 19.6205 8.31696 19.5737C8.37723 19.5134 8.47768 19.5469 8.55134 19.6138C8.625 19.7009 8.63839 19.8013 8.57813 19.8482C8.51786 19.9085 8.41741 19.875 8.34375 19.808ZM7.94196 19.3795C7.85491 19.3393 7.81473 19.2656 7.84152 19.2054C7.8683 19.1652 7.94196 19.1451 8.02902 19.1786C8.11607 19.2254 8.15625 19.2991 8.12946 19.3527C8.10268 19.4129 8.01562 19.4263 7.94196 19.3795Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              id="Vector"
              d="M27.8571 0H2.13616C0.957589 0 0 0.970982 0 2.16295V27.8371C0 29.029 0.957589 30 2.13616 30H27.8571C29.0357 30 30 29.029 30 27.8371V2.16295C30 0.970982 29.0357 0 27.8571 0ZM9.06696 25.7143H4.62054V11.3973H9.07366V25.7143H9.06696ZM6.84375 9.44196C5.41741 9.44196 4.26562 8.28348 4.26562 6.86384C4.26562 5.4442 5.41741 4.28571 6.84375 4.28571C8.26339 4.28571 9.42187 5.4442 9.42187 6.86384C9.42187 8.29018 8.27009 9.44196 6.84375 9.44196ZM25.7344 25.7143H21.2879V18.75C21.2879 17.0893 21.2545 14.9531 18.9777 14.9531C16.6607 14.9531 16.3058 16.7612 16.3058 18.6295V25.7143H11.8594V11.3973H16.125V13.3527H16.1853C16.7812 12.2277 18.2344 11.0424 20.3973 11.0424C24.8973 11.0424 25.7344 14.0089 25.7344 17.8661V25.7143Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

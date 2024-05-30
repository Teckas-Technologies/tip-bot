const Home = ({ colors }) => {
  return (
    <svg
      style={{filter:"drop-shadow(3px 5px 5px rgb(0 0 0 / 0.4))"}}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="30"
      fill="none"
      viewBox="0 0 32 30"
    >
      <path
        fill="url(#paint0_linear_1_322)"
        d="M2.709 29.008c-.51-.11-.899-.328-1.298-.726-.41-.409-.643-.844-.742-1.384C.584 26.44.577 12.438.66 11.925c.068-.418.29-.925.547-1.249C1.446 10.376 14.42.48 14.861.261A2.682 2.682 0 0117.003.19c.358.15.537.282 7.27 5.42 5.845 4.46 6.396 4.895 6.631 5.24.507.74.469.097.49 8.224.011 4.705-.004 7.383-.044 7.687a2.52 2.52 0 01-.7 1.481c-.371.402-.89.685-1.436.784-.534.098-26.054.081-26.505-.017z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1_322"
          x1="32.013"
          x2="15.999"
          y1="0.616"
          y2="29.09"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.stopColor1}></stop>
          <stop offset="1" stopColor={colors.stopColor2}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

const Wallet = ({ colors }) => {
  return (
    <svg
    style={{filter:"drop-shadow(3px 5px 5px rgb(0 0 0 / 0.4))"}}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="30"
      fill="none"
      viewBox="0 0 32 30"
    >
      <path
        fill="url(#paint0_linear_1_308)"
        d="M3.672 29.858C2.438 29.694 1.26 28.733.807 27.52l-.174-.466L.61 17.27C.584 6.858.6 6.252.933 4.942c.282-1.112.693-1.867 1.402-2.575.695-.695 1.329-1.045 2.375-1.31l.667-.17h10.082c9.639 0 10.1.006 10.49.138 1.128.382 1.913 1.144 2.306 2.24.13.36.164.666.195 1.713l.037 1.274.501.153c1.007.305 1.918 1.222 2.243 2.256l.166.528v17.792l-.175.507c-.427 1.238-1.505 2.135-2.827 2.353-.389.064-24.245.08-24.723.017zm22.069-9.084a2.854 2.854 0 001.307-1.303c.17-.364.198-.518.198-1.126 0-.609-.027-.762-.198-1.127a2.89 2.89 0 00-1.307-1.307c-.365-.171-.519-.198-1.127-.198s-.762.027-1.126.198a2.89 2.89 0 00-1.308 1.307c-.17.365-.198.518-.197 1.127 0 .571.03.771.165 1.062.335.726.859 1.209 1.599 1.473.558.199 1.429.153 1.994-.106zm.356-15.65c0-.985-.013-1.084-.169-1.315a1.853 1.853 0 00-.419-.419l-.25-.168h-9.77c-6.952 0-9.885.024-10.164.083-1.113.236-1.864 1.017-2.131 2.215-.05.224-.107.466-.127.537-.033.124.55.13 11.497.13h11.533V5.123z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1_308"
          x1="43"
          x2="8.916"
          y1="-5"
          y2="28.911"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.stopColor1}></stop>
          <stop offset="1" stopColor={colors.stopColor2}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

const About = ({ colors }) => {
  return (
    <svg
    style={{filter:"drop-shadow(3px 5px 5px rgb(0 0 0 / 0.4))"}}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8863 31.4614C10.1898 31.0888 6.03088 28.7202 3.34752 24.8899C1.97481 22.9303 1.1183 20.7453 0.736978 18.2301C0.556424 17.0394 0.556424 15.1418 0.736978 13.9511C1.27036 10.433 2.81718 7.39278 5.27564 5.03061C7.68796 2.71276 10.4879 1.34436 13.8612 0.834559C15.4598 0.592983 17.4934 0.664801 19.2237 1.02381C24.061 2.02747 28.2824 5.50902 30.1955 10.0728C31.0216 12.0435 31.3972 13.9242 31.3972 16.0907C31.3972 19.2042 30.5407 22.0665 28.8533 24.5915C26.3419 28.3498 22.4931 30.7556 18.022 31.362C17.1835 31.4757 15.6707 31.5235 14.8863 31.4614ZM16.5168 24.7472C17.1092 24.5895 17.5757 24.1869 17.8529 23.594L18.0221 23.2323V18.7725V14.3127L17.8515 13.944C17.1096 12.3395 14.8941 12.3395 14.1522 13.944L13.9817 14.3127V18.7725V23.2323L14.1508 23.594C14.5935 24.5408 15.5467 25.0053 16.5168 24.7472ZM16.9416 11.0904C17.1502 10.9877 17.395 10.8164 17.4852 10.7098C18.0385 10.056 18.0952 9.12721 17.6251 8.41805C17.2074 7.78773 16.377 7.4821 15.5468 7.65311C15.1076 7.74369 14.9201 7.83667 14.6069 8.11947C14.169 8.51484 13.9824 9.1235 14.0872 9.81429C14.1478 10.2146 14.2635 10.4493 14.5461 10.7468C15.119 11.3497 16.1222 11.4936 16.9416 11.0904Z"
        fill="url(#paint0_linear_1_226)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_226"
          x1="-0.503527"
          y1="32.9595"
          x2="32.3185"
          y2="6.0397"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={colors.stopColor1} />
          <stop offset="1" stop-color={colors.stopColor2} />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Telegram = ({ colors }) => {
  return (
    <svg
    style={{filter:"drop-shadow(3px 5px 5px rgb(0 0 0 / 0.4))"}}
      width="32"
      height="26"
      viewBox="0 0 32 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.6241 25.8706C24.2941 25.7575 23.6596 25.3158 20.6254 23.0871L17.0188 20.438L16.469 20.9776C16.1666 21.2744 15.301 22.1085 14.5454 22.8312C13.1636 24.1528 12.9484 24.3135 12.4399 24.4032C12.2329 24.4397 12.214 24.4314 12.2143 24.3044C12.2145 24.2281 12.3227 22.6572 12.4547 20.8134C12.5868 18.9696 12.6951 17.4152 12.6954 17.3591C12.6958 17.3005 15.5312 14.7046 19.3518 11.2651C23.0125 7.96951 26.024 5.22126 26.0441 5.15788C26.1296 4.88774 25.6938 4.77108 25.2671 4.94986C25.1586 4.9953 21.3978 7.33724 16.9098 10.1542C12.4218 12.9711 8.70918 15.2731 8.65947 15.2698C8.46307 15.2565 1.50311 13.058 1.24919 12.9289C0.944283 12.774 0.680695 12.5155 0.619015 12.3109C0.508165 11.9431 0.935366 11.4251 1.61602 11.1019C1.82846 11.0011 6.40777 9.22813 11.7923 7.16206C17.1768 5.096 23.3852 2.71266 25.5887 1.86574C28.5469 0.728757 29.6856 0.317264 29.9411 0.292921C30.552 0.234711 31.02 0.505038 31.2721 1.06189C31.5427 1.65964 31.5913 1.39078 29.0866 13.1423C27.8227 19.0723 26.7361 24.1482 26.6718 24.422C26.4757 25.2581 26.1789 25.712 25.696 25.9142C25.3907 26.0421 25.089 26.0298 24.6241 25.8706Z"
        fill="url(#paint0_linear_1_306)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_306"
          x1="29.8574"
          y1="0.593113"
          x2="6.76068"
          y2="24.3057"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={colors.stopColor1} />
          <stop offset="1" stop-color={colors.stopColor2} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export { Home, Wallet, About, Telegram };
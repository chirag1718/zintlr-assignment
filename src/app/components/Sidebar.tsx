import Image from "next/image";
import React from "react";

const Sidebar = () => {
  const SidebarItems = [
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8589 13.6926C10.439 11.5625 10.4987 2.93902 16.3805 2.61621L22.5776 8.86443L22.5776 20.2175L21.7993 22.9229L18.9592 23.6329L16.3805 22.9229L15.4089 16.5327L15.409 14.4026L11.8589 13.6926Z"
            fill="#D7D9E6"
            className="group-[.isActive] group-hover:fill-bg-primary-blue"
          />
          <path
            d="M10.2864 0.552294C10.732 0.194822 11.2861 0 11.8574 0C12.4286 0 12.9828 0.194822 13.4283 0.552294L22.0754 7.49005C22.3688 7.7254 22.6055 8.02365 22.7681 8.36277C22.9307 8.70189 23.0151 9.07322 23.0149 9.44931V22.035C23.0149 22.7008 22.7504 23.3394 22.2796 23.8102C21.8088 24.281 21.1703 24.5455 20.5045 24.5455H17.1572C16.4914 24.5455 15.8528 24.281 15.382 23.8102C14.9112 23.3394 14.6467 22.7008 14.6467 22.035V15.3405C14.6467 15.1185 14.5586 14.9057 14.4016 14.7488C14.2447 14.5918 14.0319 14.5037 13.8099 14.5037H9.90479C9.68286 14.5037 9.47001 14.5918 9.31308 14.7488C9.15614 14.9057 9.06798 15.1185 9.06798 15.3405V22.035C9.06798 22.7008 8.80349 23.3394 8.33269 23.8102C7.86189 24.281 7.22335 24.5455 6.55753 24.5455H3.21027C2.54446 24.5455 1.90592 24.281 1.43512 23.8102C0.964322 23.3394 0.699829 22.7008 0.699829 22.035V9.44931C0.699829 8.68837 1.04571 7.96759 1.63929 7.49116L10.2864 0.55341V0.552294ZM12.3807 1.85773C12.2322 1.73875 12.0476 1.67393 11.8574 1.67393C11.6671 1.67393 11.4825 1.73875 11.3341 1.85773L2.68699 8.79548C2.58918 8.87385 2.51023 8.97319 2.45597 9.08617C2.4017 9.19914 2.3735 9.32286 2.37346 9.44819V22.0339C2.37346 22.4969 2.74835 22.8707 3.21027 22.8707H6.55753C6.77947 22.8707 6.99232 22.7825 7.14925 22.6256C7.30618 22.4687 7.39435 22.2558 7.39435 22.0339V15.3394C7.39435 14.6736 7.65884 14.035 8.12964 13.5642C8.60044 13.0934 9.23898 12.8289 9.90479 12.8289H13.8099C14.1397 12.8289 14.4662 12.8939 14.7709 13.0201C15.0755 13.1464 15.3523 13.3314 15.5855 13.5646C15.8186 13.7978 16.0035 14.0747 16.1296 14.3794C16.2557 14.6841 16.3205 15.0107 16.3204 15.3405V22.035C16.3204 22.498 16.6953 22.8718 17.1572 22.8718H20.5045C20.7264 22.8718 20.9392 22.7837 21.0962 22.6267C21.2531 22.4698 21.3413 22.2569 21.3413 22.035V9.44931C21.3414 9.32407 21.3133 9.20041 21.2593 9.08744C21.2052 8.97447 21.1265 8.87508 21.0289 8.79659L12.3818 1.85884L12.3807 1.85773Z"
            fill="black"
          />
        </svg>
      ),
      text: "Dashboard",
    },
    {
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.30029"
            y="13.9956"
            width="20.8884"
            height="7.86061"
            fill="#D7D9E6"
            className="group-[.isActive] group-hover:fill-bg-primary-blue"
          />
          <path
            d="M18.4229 1.54541H22.7467C23.3233 1.54541 23.7907 2.01282 23.7907 2.58941V13.9329M7.79032 1.54541H2.74382C2.16724 1.54541 1.69983 2.01282 1.69983 2.5894V13.9329M1.69983 13.9329V21.1472C1.69983 21.7237 2.16724 22.1912 2.74383 22.1912H22.7467C23.3233 22.1912 23.7907 21.7237 23.7907 21.1472V13.9329M1.69983 13.9329H23.7907"
            stroke="#313945"
            stroke-width="2"
          />
        </svg>
      ),
      text: "Bullion Operations",
    },
    {
      icon: (
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.2016 13.6831C7.2016 13.6831 -1.96818 5.20433 3.54268 4.90188L8.81915 0.51123V7.09717H21.991L21.991 9.68478V13.6831L21.2592 14.8072L16.1368 21.0008L15.4051 13.6831H7.2016Z"
            fill="#D7D9E6"
            className="group-[.isActive] group-hover:fill-bg-primary-blue"
          />
          <path
            d="M21.827 13.157H0.940269C0.808208 13.157 0.700157 13.265 0.700157 13.3971V15.1979C0.700157 15.33 0.808208 15.438 0.940269 15.438H19.1048L14.7737 20.9306C14.6507 21.0867 14.7617 21.3208 14.9628 21.3208H17.1388C17.2859 21.3208 17.424 21.2548 17.517 21.1377L22.5834 14.7117C23.0786 14.0814 22.6314 13.157 21.827 13.157ZM22.5504 6.07367L3.76801 6.32496L8.7169 0.5811C8.83996 0.425027 8.72891 0.190918 8.52782 0.190918H6.3518C6.20473 0.190918 6.06667 0.256949 5.97362 0.374004L0.907254 6.80001C0.412022 7.4303 0.859231 8.35473 1.66061 8.35473H22.5504C22.6824 8.35473 22.7905 8.24668 22.7905 8.11462V6.31378C22.7905 6.18172 22.6824 6.07367 22.5504 6.07367Z"
            fill="black"
          />
        </svg>
      ),
      text: "Transactions",
    },
    {
      icon: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7498 16.3904C12.7498 16.3904 12.4187 14.1822 17.1152 13.9277L18.3626 14.5434L19.6098 16.3904V17.6217L18.9861 19.4688L15.2443 20.7001L13.997 18.8531L12.7498 16.3904Z"
            fill="#D7D9E6"
            className="group-[.isActive] group-hover:fill-bg-primary-blue"
          />
          <path
            d="M0.504816 4.1448C0.504816 4.1448 0.173714 1.93659 4.87025 1.68213L6.11758 2.2978L7.36484 4.1448V5.37614L6.74115 7.22316L2.99931 8.4545L1.75204 6.60749L0.504816 4.1448Z"
            fill="#D7D9E6"
            className="group-[.isActive] group-hover:fill-bg-primary-blue"
          />
          <path
            d="M19.2089 8.82546C19.66 8.82546 20.0926 8.64626 20.4116 8.32729C20.7306 8.00832 20.9098 7.57571 20.9098 7.12462V2.02212C20.9098 1.57103 20.7306 1.13842 20.4116 0.819452C20.0926 0.500483 19.66 0.321289 19.2089 0.321289H14.1064C13.6553 0.321289 13.2227 0.500483 12.9038 0.819452C12.5848 1.13842 12.4056 1.57103 12.4056 2.02212V7.12462C12.4056 7.57571 12.5848 8.00832 12.9038 8.32729C13.2227 8.64626 13.6553 8.82546 14.1064 8.82546H15.8073V12.3122C14.9901 12.4788 14.24 12.8821 13.6503 13.4718C13.0606 14.0615 12.6573 14.8116 12.4906 15.6288H9.00393V13.928C9.00393 13.4769 8.82473 13.0443 8.50576 12.7253C8.1868 12.4063 7.75418 12.2271 7.3031 12.2271H5.60226V8.74041C6.6347 8.52967 7.55212 7.94307 8.17664 7.09436C8.80116 6.24564 9.08831 5.19526 8.9824 4.14687C8.87649 3.09847 8.38507 2.12675 7.60342 1.42008C6.82177 0.713417 5.80558 0.322157 4.75185 0.322157C3.69812 0.322157 2.68192 0.713417 1.90027 1.42008C1.11862 2.12675 0.627207 3.09847 0.521297 4.14687C0.415388 5.19526 0.702529 6.24564 1.32705 7.09436C1.95158 7.94307 2.86899 8.52967 3.90143 8.74041V12.2271H2.2006C1.74951 12.2271 1.3169 12.4063 0.997928 12.7253C0.67896 13.0443 0.499766 13.4769 0.499766 13.928V19.0305C0.499766 19.4815 0.67896 19.9142 0.997928 20.2331C1.3169 20.5521 1.74951 20.7313 2.2006 20.7313H7.3031C7.75418 20.7313 8.1868 20.5521 8.50576 20.2331C8.82473 19.9142 9.00393 19.4815 9.00393 19.0305V17.3296H12.4906C12.6445 18.0822 12.9992 18.779 13.5173 19.3461C14.0354 19.9132 14.6974 20.3293 15.433 20.5503C16.1686 20.7714 16.9504 20.789 17.6952 20.6014C18.44 20.4138 19.1201 20.0279 19.6633 19.4848C20.2064 18.9417 20.5923 18.2616 20.7799 17.5167C20.9675 16.7719 20.9498 15.9901 20.7288 15.2545C20.5078 14.5189 20.0916 13.8569 19.5245 13.3388C18.9575 12.8208 18.2606 12.466 17.5081 12.3122V8.82546H19.2089ZM2.2006 4.57337C2.2006 4.06878 2.35023 3.57552 2.63056 3.15597C2.9109 2.73642 3.30935 2.40942 3.77553 2.21632C4.24171 2.02323 4.75468 1.9727 5.24957 2.07114C5.74446 2.16958 6.19905 2.41257 6.55585 2.76937C6.91265 3.12616 7.15563 3.58075 7.25407 4.07565C7.35251 4.57054 7.30199 5.08351 7.10889 5.54969C6.9158 6.01587 6.5888 6.41432 6.16924 6.69466C5.74969 6.97499 5.25644 7.12462 4.75185 7.12462C4.07521 7.12462 3.42629 6.85583 2.94784 6.37738C2.46939 5.89893 2.2006 5.25001 2.2006 4.57337ZM7.3031 19.0305H2.2006V13.928H7.3031V19.0305ZM19.2089 16.4792C19.2089 16.9838 19.0593 17.4771 18.779 17.8966C18.4986 18.3162 18.1002 18.6432 17.634 18.8363C17.1678 19.0294 16.6548 19.0799 16.1599 18.9814C15.6651 18.883 15.2105 18.64 14.8537 18.2832C14.4969 17.9264 14.2539 17.4718 14.1554 16.9769C14.057 16.482 14.1075 15.9691 14.3006 15.5029C14.4937 15.0367 14.8207 14.6383 15.2403 14.3579C15.6598 14.0776 16.1531 13.928 16.6577 13.928C17.3343 13.928 17.9832 14.1967 18.4617 14.6752C18.9401 15.1537 19.2089 15.8026 19.2089 16.4792ZM14.1064 2.02212H19.2089V7.12462H14.1064V2.02212Z"
            fill="black"
          />
        </svg>
      ),
      text: "Your Network",
    },
    {
      icon: (
        <svg
          width="27"
          height="28"
          viewBox="0 0 27 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.4375 17.945C8.4375 17.945 9.2639 15.398 13.5 15.1685L17.4375 16.2791L19.4138 18.798L19.125 20.7216V23.4981L11.8125 24.0534H9L8.4375 17.945Z"
            fill="#D7D9E6"
            className="group-[.isActive] group-hover:fill-bg-primary-blue"
          />
          <path
            d="M10.1246 9.05962C10.1246 9.05962 9.82598 7.0679 14.0621 6.83838L15.1871 7.39369L16.3121 9.05962V10.1702L15.7496 11.8362L12.3746 12.9468L11.2496 11.2809L10.1246 9.05962Z"
            fill="#D7D9E6"
            className="group-[.isActive] group-hover:fill-bg-primary-blue"
          />
          <path
            d="M13.425 13.5394C15.45 13.5394 17.025 11.9105 17.025 9.91141C17.025 7.91229 15.375 6.35742 13.35 6.35742C11.325 6.35742 9.75 7.98633 9.75 9.91141C9.75 11.9105 11.4 13.5394 13.425 13.5394ZM13.35 7.83825C13.425 7.83825 13.425 7.83825 13.35 7.83825C14.55 7.83825 15.525 8.80079 15.525 9.98545C15.525 11.1701 14.55 12.0586 13.35 12.0586C12.15 12.0586 11.25 11.0961 11.25 9.98545C11.25 8.80079 12.225 7.83825 13.35 7.83825Z"
            fill="black"
          />
          <path
            d="M24.5253 13.0949C23.1003 11.8362 21.2253 11.1698 19.2753 11.2439H18.6753C18.5253 11.8362 18.3003 12.3545 18.0003 12.7987C18.4503 12.7247 18.8253 12.7247 19.2753 12.7247C20.7003 12.6506 22.1253 13.0949 23.2503 13.9093V19.2403H24.7503V13.317L24.5253 13.0949Z"
            fill="black"
          />
          <path
            d="M17.55 6.50551C17.925 5.61701 18.975 5.17277 19.95 5.54297C20.85 5.91318 21.3 6.94976 20.925 7.9123C20.625 8.57867 19.95 9.02292 19.275 9.02292C19.125 9.02292 18.9 9.02292 18.75 8.94888C18.825 9.31908 18.825 9.68929 18.825 9.98546V10.4297C18.975 10.4297 19.125 10.5037 19.275 10.5037C21.15 10.5037 22.65 9.02292 22.65 7.24593C22.65 5.39489 21.15 3.91406 19.35 3.91406C18.15 3.91406 17.1 4.50639 16.5 5.54297C16.875 5.7651 17.25 6.06126 17.55 6.50551Z"
            fill="black"
          />
          <path
            d="M8.99963 12.873C8.69963 12.4287 8.47463 11.9104 8.32463 11.3181H7.72463C5.77463 11.244 3.89963 11.9104 2.47463 13.0951L2.24963 13.3172V19.2405H3.74963V13.9095C4.94963 13.0951 6.29963 12.6508 7.72463 12.7249C8.17463 12.7249 8.62463 12.7989 8.99963 12.873Z"
            fill="black"
          />
          <path
            d="M7.72507 10.4297C7.87507 10.4297 8.02507 10.4297 8.17507 10.3556V9.91139C8.17507 9.54118 8.17507 9.17098 8.25007 8.87481C8.10007 8.94885 7.87507 8.94885 7.72507 8.94885C6.75007 8.94885 5.92507 8.1344 5.92507 7.17186C5.92507 6.20932 6.75007 5.39486 7.72507 5.39486C8.47507 5.39486 9.15007 5.83911 9.45007 6.50549C9.75007 6.13528 10.2001 5.76507 10.5751 5.46891C9.60007 3.91404 7.57507 3.39575 6.00007 4.35828C4.42507 5.32082 3.90007 7.31994 4.87507 8.87481C5.47507 9.83735 6.52507 10.4297 7.72507 10.4297Z"
            fill="black"
          />
          <path
            d="M20.075 17.7435L19.925 17.5214C18.425 15.8925 16.325 14.9299 14.075 15.004C11.825 14.9299 9.65 15.8925 8.15 17.5214L8 17.7435V23.3707C8 24.037 8.525 24.6294 9.275 24.6294H18.875C19.55 24.6294 20.15 24.037 20.15 23.3707V17.7435H20.075ZM18.575 23.1485H9.5V18.2618C10.7 17.0771 12.35 16.4848 14.075 16.4848C15.725 16.4108 17.375 17.0771 18.575 18.2618V23.1485Z"
            fill="black"
          />
        </svg>
      ),
      text: "Consumers",
    },
    {
      icon: (
        <svg
          width="23"
          height="27"
          viewBox="0 0 23 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.83033 1.38477H18.7424M3.20264 4.89525H20.2901"
            stroke="#313945"
            stroke-width="2"
          />
          <path
            d="M1.40869 18.0908H22.1287V23.6708C22.1287 24.824 21.1938 25.7588 20.0407 25.7588H3.49668C2.34352 25.7588 1.40869 24.824 1.40869 23.6708V18.0908Z"
            fill="#D7D9E6"
            className="group-[.isActive] group-hover:fill-bg-primary-blue"
          />
          <rect
            x="1.69995"
            y="8.43164"
            width="20.0909"
            height="17.1455"
            rx="1.08799"
            stroke="#313945"
            stroke-width="2"
          />
        </svg>
      ),
      text: "Other Operations",
    },
    {
      icon: (
        <svg
          width="23"
          height="25"
          viewBox="0 0 23 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.59697 23.3634C6.37463 13.4324 12.0433 5.34932 16.789 5.08887L21.2001 8.23965L19.7658 16.7695L21.8303 19.5824V23.3634H12.2452H8.59697Z"
            fill="#D7D9E6"
            className="group-[.isActive] group-hover:fill-bg-primary-blue"
          />
          <path
            d="M11.7462 6.78042C12.0944 6.78042 12.4284 6.64208 12.6747 6.39583C12.9209 6.14958 13.0593 5.81559 13.0593 5.46734C13.0593 5.11908 12.9209 4.7851 12.6747 4.53884C12.4284 4.29259 12.0944 4.15425 11.7462 4.15425C11.3979 4.15425 11.0639 4.29259 10.8177 4.53884C10.5714 4.7851 10.4331 5.11908 10.4331 5.46734C10.4331 5.81559 10.5714 6.14958 10.8177 6.39583C11.0639 6.64208 11.3979 6.78042 11.7462 6.78042ZM21.1985 18.5423V10.1297H21.3434C22.7503 10.1297 23.3284 8.32115 22.1784 7.50668L12.9624 0.965664C12.6071 0.713247 12.182 0.577637 11.7462 0.577637C11.3103 0.577637 10.8853 0.713247 10.53 0.965664L1.31079 7.50668C0.163904 8.32115 0.738921 10.1281 2.14574 10.1281H2.29383V18.5407C1.34702 19.1488 0.718441 20.2106 0.718441 21.4189V23.5189C0.718441 23.7278 0.80143 23.9282 0.949152 24.0759C1.09687 24.2236 1.29723 24.3066 1.50614 24.3066H21.9862C22.1951 24.3066 22.3955 24.2236 22.5432 24.0759C22.6909 23.9282 22.7739 23.7278 22.7739 23.5189V21.4189C22.7739 20.2106 22.1469 19.1488 21.1985 18.5423ZM11.4405 2.25118C11.5292 2.18838 11.6352 2.15464 11.7438 2.15464C11.8524 2.15464 11.9584 2.18838 12.0471 2.25118L20.9307 8.55274H2.5585L11.4421 2.25118H11.4405ZM19.62 10.1281V18.0145C19.5329 18.0081 19.4457 18.0049 19.3584 18.0051H16.4692V10.1297H19.62V10.1281ZM3.86922 18.0145V10.1297H7.02V18.0066H4.13073C4.04251 18.0066 3.95429 18.0098 3.86764 18.0161L3.86922 18.0145ZM4.13231 19.5805H19.3616C20.3761 19.5805 21.1985 20.4028 21.1985 21.4189V22.7312H2.29383V21.4189C2.29383 20.4028 3.11776 19.5805 4.13231 19.5805ZM10.9585 18.0051H8.59539V10.1297H10.9585V18.0066V18.0051ZM12.5339 18.0051V10.1297H14.8969V18.0066H12.5339V18.0051Z"
            fill="black"
          />
        </svg>
      ),
      text: "Mange Bank Acconts",
    },
    {
      icon: (
        <svg
          width="25"
          height="20"
          viewBox="0 0 25 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.69983 5.48594V1.30664H23.7907V5.48594H1.69983Z"
            stroke="#313945"
            stroke-width="2"
          />
          <path
            d="M3.07532 18.9789V5.60498H22.4198V18.9789H3.07532Z"
            stroke="#313945"
            stroke-width="2"
          />
          <rect
            x="7.12329"
            y="8.09863"
            width="11.2492"
            height="4.49966"
            rx="2.08799"
            fill="#D7D9E6"
            className="group-[.isActive] group-hover:fill-bg-primary-blue"
          />
        </svg>
      ),
      text: "FAQ",
    },
    {
      icon: (
        <svg
          width="25"
          height="27"
          viewBox="0 0 25 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4209 24.6509C8.37071 15.4892 19.4137 9.77641 23.7916 9.53613L21.4662 14.7682L23.7915 16.5122L23.2102 19.4189L20.8261 21.1277L16.2342 21.7442L15.0715 25.2322L10.4209 24.6509Z"
            className="group-[.isActive] group-hover:fill-bg-primary-blue"
            fill="#D7D9E6"
          />
          <path
            d="M12.76 16.8958C10.8945 16.8958 9.3855 15.4424 9.3855 13.617C9.3855 11.7916 10.8945 10.3267 12.76 10.3267C14.6255 10.3267 16.0988 11.7916 16.0988 13.617C16.0988 15.4424 14.6255 16.8958 12.76 16.8958"
            stroke="black"
          />
          <path
            d="M23.4769 16.3613C23.2511 16.0125 22.9303 15.6637 22.5144 15.4428C22.1817 15.28 21.9678 15.0126 21.7777 14.6987C21.1717 13.6988 21.5282 12.3849 22.5382 11.792C23.7264 11.1292 24.1066 9.65265 23.4174 8.5016L22.6214 7.12965C21.9441 5.9786 20.4588 5.57167 19.2825 6.24602C18.2369 6.8041 16.8942 6.43204 16.2882 5.44377C16.0981 5.11822 15.9912 4.76942 16.0149 4.42062C16.0506 3.96718 15.908 3.53699 15.6941 3.18818C15.2545 2.46733 14.4584 1.979 13.5791 1.979H11.9038C11.0364 2.00226 10.2403 2.46733 9.80064 3.18818C9.57488 3.53699 9.44418 3.96718 9.46795 4.42062C9.49171 4.76942 9.38477 5.11822 9.19466 5.44377C8.58868 6.43204 7.24601 6.8041 6.21227 6.24602C5.02407 5.57167 3.5507 5.9786 2.86154 7.12965L2.06544 8.5016C1.38817 9.65265 1.76839 11.1292 2.94471 11.792C3.95468 12.3849 4.31115 13.6988 3.71704 14.6987C3.51505 15.0126 3.30117 15.28 2.96848 15.4428C2.56449 15.6637 2.20803 16.0125 2.01791 16.3613C1.57828 17.0821 1.60204 17.989 2.04168 18.7448L2.86154 20.14C3.30117 20.8841 4.12103 21.3491 4.97654 21.3491C5.38053 21.3491 5.85581 21.2329 6.23603 21.0003C6.53308 20.8027 6.88955 20.7329 7.28165 20.7329C8.45797 20.7329 9.44418 21.698 9.46795 22.849C9.46795 24.1861 10.5611 25.2325 11.9394 25.2325H13.5554C14.9218 25.2325 16.0149 24.1861 16.0149 22.849C16.0506 21.698 17.0368 20.7329 18.2131 20.7329C18.5933 20.7329 18.9498 20.8027 19.2587 21.0003C19.639 21.2329 20.1024 21.3491 20.5182 21.3491C21.3619 21.3491 22.1817 20.8841 22.6214 20.14L23.4531 18.7448C23.8808 17.9658 23.9165 17.0821 23.4769 16.3613"
            stroke="black"
            stroke-width="2"
          />
        </svg>
      ),
      text: "Customize Dashboard",
    },
  ];
  return (
    <div className="flex flex-col items-start justify-normal gap-14 h-screen w-[267px] px-2 py-12 bg-bg-primary-light-blue">
      {/* company logo */}
      <div className="flex items-center justify-center px-6">
        <Image src={"/assets/sidebar/logo.svg"} alt="" width={25} height={25} />
        <p className="font-inter font-[600] text-xl drop-shadow-lg text-text-purple">
          ZINTLR
        </p>
      </div>
      {/* sidebar items */}
      <div className="flex flex-col items-start justify-normal">
        {SidebarItems.map((items, index) => {
          return (
            <div
              className="flex items-center justify-normal gap-3 h-[50px] w-[253px] px-3 group isActive hover:bg-bg-primary-blue rounded-full cursor-pointer "
              key={index}
            >
              <div className="flex items-center justify-center h-[33px] w-[33px] rounded-full object-contain group-[.isActive] group-hover:text-white group-hover:bg-white">
                {items.icon}
              </div>
              <p className="font-medium group-[.isActive] group-hover:font-[600] text-gray-500 group-hover:text-white">
                {items.text}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-1 justify-normal items-center w-full">
        <p className="flex items-start justify-normal pl-3 w-full text-base font-medium">
          Your Stock
        </p>
        <div className="flex items-center justify-center pl-2 h-[135px] w-[225px] bg-gradient-to-b from-[#3CBEE7] to-[#639EE3] rounded-r-2xl rounded-bl-2xl relative">
          <Image
            className="absolute top-[2px] left-[1px]"
            src={"/assets/sidebar/moneyBagWhite.svg"}
            height={37}
            width={37}
            alt="money bag blue color"
          />
          <div className="flex flex-col items-center justify-center gap-3 h-[110px] w-[191px] rounded-lg pt-3 pl-[17px] pr-[10px] overflow-hidden relative bg-white">
            <Image
              className="absolute -top-[11px] -left-[20px]"
              src={"/assets/sidebar/moneyBagBlue.svg"}
              height={37}
              width={37}
              alt="money bag blue color"
            />
            {/* gold rate */}
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <p className="text-base">
                  TruCoin <span className="text-text-orange">Gold</span>
                </p>
                <p className="text-xs text-text-green">$6.18(+1.82%)</p>
              </div>
              <p className="text-base font-semibold">7.3k gm</p>
            </div>
            {/* silver rate */}
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <p className="text-base">
                  TruCoin <span className="text-text-orange">Silver</span>
                </p>
                <p className="text-xs text-text-green">$6.18(+1.82%)</p>
              </div>
              <p className="text-base font-semibold">7.3k gm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

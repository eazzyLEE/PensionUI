import React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Mask,
  Stop,
  Path,
  Rect,
} from 'react-native-svg';

const NairaSvg = props => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Path
      opacity={0.1}
      d="M0 15C0 6.716 6.716 0 15 0h8.077C26.9 0 30 3.1 30 6.923v16.154C30 26.9 26.9 30 23.077 30H15C6.716 30 0 23.284 0 15z"
      fill="#1F3F66"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.527 21.165c-.63 0-.944-.175-.944-.525V8.927c0-.35.314-.526.944-.526h.641c.261 0 .472.03.633.091.16.06.288.175.383.345l4.56 7.089c.238.35.446.713.624 1.088l.071-.019a15.693 15.693 0 01-.036-1.233V8.927c0-.35.315-.526.945-.526h.392c.63 0 .944.176.944.526V20.64c0 .35-.315.525-.944.525h-.57c-.25 0-.449-.03-.597-.09a.856.856 0 01-.383-.327l-4.668-7.216a6.894 6.894 0 01-.623-1.07l-.072.019c.024.278.036.689.036 1.233v6.926c0 .35-.315.525-.944.525h-.392z"
      fill="#1F3F66"
    />
    <Rect
      x={8}
      y={11.751}
      width={14.744}
      height={2.501}
      rx={1.25}
      fill="#1F3F66"
    />
    <Path
      d="M8 17.378c0-.69.56-1.25 1.25-1.25h12.243a1.25 1.25 0 110 2.5H9.25c-.69 0-1.25-.56-1.25-1.25z"
      fill="#1F3F66"
    />
  </Svg>
);

const TransactionSvg = props => (
  <Svg width={375} height={87} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M-61.718 76.031C-30.348 76.031-30.025 9 1.256 9 32.537 9 30.74 31.45 62.544 31.45c31.804 0 31.446-15.07 61.604-15.07 30.158 0 30.802 28.605 62.68 28.605 31.877 0 28.623-44.007 60.665-44.007 32.043 0 26.169 33.593 58.23 33.593C337.784 34.571 339.038 9 371.232 9s27.72 67.031 59.309 67.031h-492.26z"
      fill="url(#prefix__paint0_linear)"
    />
    <Path
      clipRule="evenodd"
      d="M0 75.499l.064-.998c62.49 4 124.979 5.999 187.468 5.999 62.489 0 124.979-2 187.468-5.999l.064.998c-62.511 4-125.021 6.001-187.532 6.001-62.511 0-125.021-2-187.532-6.001z"
      stroke="#fff"
      strokeWidth={10}
    />
    <Defs>
      <LinearGradient
        id="prefix__paint0_linear"
        x1={-102.501}
        y1={0.978}
        x2={-102.501}
        y2={88.013}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#3E65EB" />
        <Stop offset={1} stopColor="#1D35D3" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const ProfileSvg = props => (
  <Svg width={22} height={21} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10.293a5 5 0 110-10 5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6zM1.93 19.79a1 1 0 001.068-.928c.212-3.036 2.716-4.57 7.987-4.57 5.272 0 7.788 1.536 8.016 4.576a1 1 0 101.994-.15c-.322-4.294-3.815-6.425-10.01-6.425-6.196 0-9.682 2.134-9.983 6.43a1 1 0 00.928 1.067z"
      fill="#8F9FB3"
    />
    <Path
      d="M2.998 18.862l-.5-.034.5.034zM19 18.868l-.499.037.499-.037zm1.994-.15l-.498.037.498-.037zm-19.993.005l.5.035-.5-.035zM5.5 5.293a5.5 5.5 0 005.5 5.5v-1a4.5 4.5 0 01-4.5-4.5h-1zm5.5-5.5a5.5 5.5 0 00-5.5 5.5h1a4.5 4.5 0 014.5-4.5v-1zm5.5 5.5a5.5 5.5 0 00-5.5-5.5v1a4.5 4.5 0 014.5 4.5h1zm-5.5 5.5a5.5 5.5 0 005.5-5.5h-1a4.5 4.5 0 01-4.5 4.5v1zm2.5-5.5a2.5 2.5 0 01-2.5 2.5v1a3.5 3.5 0 003.5-3.5h-1zm-2.5-2.5a2.5 2.5 0 012.5 2.5h1a3.5 3.5 0 00-3.5-3.5v1zm-2.5 2.5a2.5 2.5 0 012.5-2.5v-1a3.5 3.5 0 00-3.5 3.5h1zm2.5 2.5a2.5 2.5 0 01-2.5-2.5h-1a3.5 3.5 0 003.5 3.5v-1zM2.499 18.828a.5.5 0 01-.534.463l-.07.998a1.5 1.5 0 001.601-1.392l-.997-.07zm8.486-5.035c-2.669 0-4.718.385-6.142 1.214-1.462.85-2.227 2.145-2.344 3.82l.997.07c.096-1.361.688-2.35 1.85-3.026 1.198-.697 3.037-1.078 5.639-1.078v-1zM19.5 18.83c-.126-1.677-.899-2.972-2.365-3.822-1.429-.83-3.48-1.215-6.15-1.215v1c2.603 0 4.445.381 5.649 1.08 1.167.677 1.766 1.669 1.868 3.032l.998-.075zm.536.461a.5.5 0 01-.536-.46l-.998.074a1.5 1.5 0 001.608 1.383l-.074-.997zm.46-.536a.5.5 0 01-.46.536l.074.997a1.5 1.5 0 001.384-1.608l-.997.075zm-9.511-5.962c3.052 0 5.365.527 6.94 1.525 1.547.98 2.422 2.44 2.572 4.437l.997-.075c-.172-2.295-1.205-4.048-3.034-5.207-1.802-1.142-4.332-1.68-7.475-1.68v1zM1.5 18.758c.14-2 1.008-3.459 2.55-4.44 1.57-.998 3.881-1.525 6.934-1.525v-1c-3.143 0-5.673.539-7.47 1.682C1.69 14.635.664 16.39.503 18.688l.997.07zm.464.534a.5.5 0 01-.464-.534l-.997-.07a1.5 1.5 0 001.391 1.601l.07-.998z"
      fill="#8E9FB3"
    />
  </Svg>
);

const HomeSvg = props => (
  <Svg width={18} height={20} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.715.289l7.709 7.884c.366.376.576.9.576 1.439v8.376c0 1.103-.847 2-1.888 2H13v-9a1 1 0 00-1-1H6a1 1 0 00-1 1v9H1.889c-1.041 0-1.889-.897-1.889-2V9.612c0-.54.21-1.063.575-1.438L8.285.289c.377-.385 1.053-.385 1.43 0zM11 18.989H7v-7h4v7z"
      fill="#030404"
    />
  </Svg>
);

const StatementSvg = props => (
  <Svg width={18} height={22} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 13H6a1 1 0 010-2h3a1 1 0 010 2zm-3 2h6a1 1 0 110 2H6a1 1 0 010-2zm8.444 4H3.555C3.249 19 3 18.776 3 18.5v-15c0-.276.249-.5.555-.5H9v3.15C9 7.722 10.217 9 11.714 9H15v9.5c0 .276-.249.5-.556.5zM11 3.978L13.742 7h-2.028C11.32 7 11 6.619 11 6.15V3.978zm5.74 3.35l-5.444-6A1 1 0 0010.555 1h-7C2.146 1 1 2.122 1 3.5v15C1 19.878 2.146 21 3.555 21h10.889C15.853 21 17 19.878 17 18.5V8a1 1 0 00-.26-.672z"
      fill="#8F9FB3"
    />
    <Path
      d="M9 3h.1v-.1H9V3zm6 6h.1v-.1H15V9zm-4-5.022l.074-.067-.174-.192v.259h.1zM13.742 7v.1h.226l-.152-.167-.074.067zm-2.446-5.672l.074-.067-.074.067zM6 13.1h3v-.2H6v.2zM4.9 12A1.1 1.1 0 006 13.1v-.2a.9.9 0 01-.9-.9h-.2zM6 10.9A1.1 1.1 0 004.9 12h.2a.9.9 0 01.9-.9v-.2zm3 0H6v.2h3v-.2zm1.1 1.1A1.1 1.1 0 009 10.9v.2a.9.9 0 01.9.9h.2zM9 13.1a1.1 1.1 0 001.1-1.1h-.2a.9.9 0 01-.9.9v.2zm3 1.8H6v.2h6v-.2zm1.1 1.1a1.1 1.1 0 00-1.1-1.1v.2a.9.9 0 01.9.9h.2zM12 17.1a1.1 1.1 0 001.1-1.1h-.2a.9.9 0 01-.9.9v.2zm-6 0h6v-.2H6v.2zM4.9 16A1.1 1.1 0 006 17.1v-.2a.9.9 0 01-.9-.9h-.2zM6 14.9A1.1 1.1 0 004.9 16h.2a.9.9 0 01.9-.9v-.2zm8.444 4H3.555v.2h10.889v-.2zm-10.889 0c-.26 0-.455-.189-.455-.4h-.2c0 .34.304.6.655.6v-.2zm-.455-.4v-15h-.2v15h.2zm0-15c0-.211.194-.4.455-.4v-.2c-.351 0-.655.26-.655.6h.2zm.455-.4H9v-.2H3.555v.2zM8.9 3v3.15h.2V3h-.2zm0 3.15c0 1.623 1.257 2.95 2.814 2.95v-.2C10.277 8.9 9.1 7.671 9.1 6.15h-.2zm2.814 2.95H15v-.2h-3.286v.2zM14.9 9v9.5h.2V9h-.2zm0 9.5c0 .211-.194.4-.456.4v.2c.352 0 .656-.26.656-.6h-.2zM10.926 4.045l2.742 3.022.148-.134-2.742-3.022-.148.134zM13.742 6.9h-2.028v.2h2.028v-.2zm-2.028 0c-.323 0-.614-.32-.614-.75h-.2c0 .507.35.95.814.95v-.2zm-.614-.75V3.978h-.2V6.15h.2zm5.714 1.11l-5.444-6-.148.135 5.444 6 .148-.134zm-5.444-6a1.1 1.1 0 00-.815-.36v.2a.9.9 0 01.667.295l.148-.134zM10.555.9h-7v.2h7V.9zm-7 0C2.093.9.9 2.065.9 3.5h.2c0-1.32 1.1-2.4 2.455-2.4V.9zM.9 3.5v15h.2v-15H.9zm0 15c0 1.435 1.193 2.6 2.655 2.6v-.2c-1.356 0-2.455-1.08-2.455-2.4H.9zm2.655 2.6h10.889v-.2H3.555v.2zm10.889 0c1.462 0 2.656-1.165 2.656-2.6h-.2c0 1.32-1.1 2.4-2.456 2.4v.2zm2.656-2.6V8h-.2v10.5h.2zm0-10.5a1.1 1.1 0 00-.286-.74l-.148.135A.9.9 0 0116.9 8h.2z"
      fill="#8E9FB4"
    />
  </Svg>
);

const CashSvg = props => (
  <Svg width={19} height={17} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.867 16.764c-.827 0-1.24-.23-1.24-.69V13.79H1.5a1.5 1.5 0 01-1.5-1.5v-.284a1.5 1.5 0 011.5-1.5h1.127V7.225H1.5a1.5 1.5 0 01-1.5-1.5V5.44a1.5 1.5 0 011.5-1.5h1.127V.69c0-.46.413-.69 1.24-.69h.842c.343 0 .62.04.83.12.211.078.38.23.504.452L8.21 3.94h4.688V.69c0-.46.414-.69 1.24-.69h.515c.827 0 1.24.23 1.24.69v3.25h.657a1.5 1.5 0 011.5 1.5v.285a1.5 1.5 0 01-1.5 1.5h-.657v3.282h.657a1.5 1.5 0 011.5 1.5v.284a1.5 1.5 0 01-1.5 1.5h-.657v2.282c0 .46-.413.691-1.24.691h-.748c-.328 0-.59-.04-.784-.119a1.125 1.125 0 01-.503-.429l-1.569-2.425H5.622v2.282c0 .46-.414.691-1.24.691h-.515zm1.755-6.257h3.303L6.802 7.225h-1.18v3.282zm7.286 0h-.481c-.124-.211-.255-.42-.394-.625l-1.71-2.657h2.575v2.443c0 .313.004.593.01.839z"
      fill="#8F9FB3"
    />
  </Svg>
);

const AddSvg = props => (
  <Svg width={28} height={28} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 0c10.672 0 14 3.84 14 14s-3.328 14-14 14C3.329 28 0 24.16 0 14S3.329 0 14 0z"
      fill="#4EAC50"
    />
    <Rect x={13} y={9} width={2} height={10} rx={1} fill="#fff" />
    <Rect
      x={19}
      y={13}
      width={2}
      height={10}
      rx={1}
      transform="rotate(90 19 13)"
      fill="#fff"
    />
  </Svg>
);

const ActivitySvg = props => (
  <Svg width={17} height={15} fill="none" {...props}>
    <Path
      d="M10.625 11.635L7.047.901c-.215-.646-1.129-.646-1.344 0l-1.964 5.89H1.417a.708.708 0 100 1.417H4.25a.708.708 0 00.672-.484l1.453-4.359 3.578 10.734c.215.646 1.129.646 1.344 0l1.963-5.89h2.323a.708.708 0 000-1.417H12.75a.708.708 0 00-.672.484l-1.453 4.36z"
      fill="#32BD58"
    />
    <Mask
      id="prefix__a"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={17}
      height={15}>
      <Path
        d="M10.625 11.635L7.047.901c-.215-.646-1.129-.646-1.344 0l-1.964 5.89H1.417a.708.708 0 100 1.417H4.25a.708.708 0 00.672-.484l1.453-4.359 3.578 10.734c.215.646 1.129.646 1.344 0l1.963-5.89h2.323a.708.708 0 000-1.417H12.75a.708.708 0 00-.672.484l-1.453 4.36z"
        fill="#fff"
      />
    </Mask>
  </Svg>
);

const DebitActivitySvg = props => (
  <Svg width={17} height={15} fill="none" {...props}>
    <Path
      d="M10.625 11.635L7.047.901c-.215-.646-1.129-.646-1.344 0l-1.964 5.89H1.417a.708.708 0 000 1.417H4.25a.708.708 0 00.672-.484l1.453-4.36L9.953 14.1c.215.646 1.129.646 1.344 0l1.963-5.89h2.323a.708.708 0 000-1.417H12.75a.708.708 0 00-.672.484l-1.453 4.36z"
      fill="#ED7136"
    />
    <Mask
      id="prefix__a"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={17}
      height={15}>
      <Path
        d="M10.625 11.635L7.047.901c-.215-.646-1.129-.646-1.344 0l-1.964 5.89H1.417a.708.708 0 000 1.417H4.25a.708.708 0 00.672-.484l1.453-4.36L9.953 14.1c.215.646 1.129.646 1.344 0l1.963-5.89h2.323a.708.708 0 000-1.417H12.75a.708.708 0 00-.672.484l-1.453 4.36z"
        fill="#fff"
      />
    </Mask>
  </Svg>
);

export {
  NairaSvg,
  TransactionSvg,
  ProfileSvg,
  HomeSvg,
  StatementSvg,
  CashSvg,
  AddSvg,
  ActivitySvg,
  DebitActivitySvg,
};
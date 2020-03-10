export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAvarage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
  battingAvarage: 0.367
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAvarage: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAvarage: 0.286
};

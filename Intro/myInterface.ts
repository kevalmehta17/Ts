interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: number;
  startTrail() : string;
}

const keval: User = {
  email: "h@keval.com",
  userId: 111,
  dbId: 123,
  startTrail: () => {
    return "train";
  },
};
keval.email = "test@gmail.com";

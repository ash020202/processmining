const router = [
  {
    method: "GET",
    path: "/",
    handler: () => {
      return "Hello world";
    },
  },
  {
    method: "GET",
    path: "/user",
    handler: () => {
      const user = [{ name: "vimal" }, { name: "vimal" }, { name: "vimal" }];
      return user;
    },
  },
];

export default router;

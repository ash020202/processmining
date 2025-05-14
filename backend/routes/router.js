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
    handler: (req, h) => {
      const user = [{ name: "vimal" }, { name: "vimal" }, { name: "vimal" }];
      return h.status;
    },
  },
  {
    method: "POST",
    path: "/name",
    handler: (req, h) => {
      const name = req.payload;
      return {
        message: "Data received successfully!",
        data: name,
      };
    },
  },
  {
    method: "GET",
    path: "/{any*}",
    handler: (req, h) => {
      return h.redirect("/");
    },
  },
];

export default router;

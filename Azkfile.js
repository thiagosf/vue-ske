systems({
  'vue-ske': {
    depends: [],
    image: {"docker": "node:8"},
    provision: [
      "npm install",
    ],
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",
    command: ["npm", "run", "dev"],
    wait: 20,
    mounts: {
      '/azk/#{manifest.dir}': sync("."),
      '/azk/#{manifest.dir}/node_modules': persistent("./node_modules"),
    },
    scalable: {"default": 1},
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    ports: {
      http: "3000/tcp",
    },
    envs: {
      NODE_ENV: "dev",
      PORT: "3000",
    },
  },
});

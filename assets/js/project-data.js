(() => {
  "use strict";

  const projects = [
    {
      id: "soft-robot-prototype",
      title: "Soft Robot Prototype",
      organization: "ELIXIR Lab",
      categories: ["Electrical", "Mechanical", "Machine Learning"],
      image: "assets/img/portfolio/projects/soft-robot-prototype.jpg",
      video: "assets/video/portfolio/soft-robot-prototype.mp4",
      gallery: [
        {
          src: "assets/img/portfolio/projects/soft-robot/electromagnet-assembly.jpg",
          alt: "Orange soft robot prototype showing its curved body and electromagnet assembly"
        },
        {
          src: "assets/img/portfolio/projects/soft-robot/black-prototype.jpg",
          alt: "Black soft robot prototype undergoing electronics testing on a workbench"
        }
      ],
      alt: "Untethered soft robot prototype with electromagnetic actuators",
      lead: "An untethered soft robot combining electromagnetic actuation, lightweight mechanical design, and data-driven gait optimization.",
      overview: "Working with a multidisciplinary team of more than ten undergraduate researchers, I helped to iteratively develop an untethered soft robot and concentrated on the electromagnets that drive it's motion.",
      challenge: "The actuator design required careful trade-offs among magnetic-field density, wire gauge, overall mass, and manufacturability. The robot also needed an efficient method for selecting pulse sequences that maximize forward speed.",
      results: "I designed electromagnet moulds in Onshape, fabricated components on a Bambu Lab P1S, and built a PyTorch regression network using synthetic training data. Replacing the wire casing with a mould reduced electromagnet mass by 28%. The model achieved scaled error below 0.0004 and identified pulse inputs that predicted maximum speed within 1% (synthetic dataset)."
    },
    {
      id: "mechanical-arm-gripper",
      title: "Mechanical Arm with Gripper",
      organization: "Toronto Metropolitan University",
      categories: ["Mechanical"],
      image: "assets/img/portfolio/projects/mechanical-arm-gripper.png",
      alt: "CAD model of a mechanical four-bar arm and gripper",
      lead: "A manually operated four-bar linkage arm designed to collect and sort styrofoam, plastic, and metal spheres.",
      overview: "The mechanism combines an extended-reach arm with a string-actuated gripper that closes around objects for straightforward, reliable operation.",
      challenge: "Every component had to be laser-cut from a single 8 by 10 inch sheet of 1/8 inch thick acrylic while preserving sufficient reach, mobility, and structural integrity.",
      results: "I modelled the assembly in SolidWorks and refined the geometry to reduce material consumption without compromising the arm's usable workspace. The final design integrated the linkage, gripper, and supporting structure within the project manufacturing constraint."
    },
    {
      id: "line-maze-robot",
      title: "Line Following & Maze Traversal Robot",
      organization: "Toronto Metropolitan University",
      categories: ["Software", "Electrical"],
      image: "assets/img/portfolio/projects/line-maze-robot.jpg",
      videos: [
        {
          src: "assets/video/portfolio/line-maze-robot/line-following-demo.mp4",
          label: "Line-following robot demonstration",
          orientation: "landscape"
        },
        {
          src: "assets/video/portfolio/line-maze-robot/maze-traversal-demo.mp4",
          label: "Maze-traversal robot demonstration",
          orientation: "portrait"
        }
      ],
      alt: "Autonomous rover navigating a maze",
      lead: "An autonomous rover programmed to complete sequential line-following and maze-traversal challenges using closed-loop sensor feedback.",
      overview: "The robot combined C++ and AVR Assembly software with IMU, ultrasonic sensing, and LiDAR to transition from line tracking into autonomous maze navigation.",
      challenge: "Reliable navigation required accurate 90-degree turns, early evaluation of competing paths, and consistent alignment before entering the selected corridor.",
      results: "I implemented closed-loop IMU turning, a two-stop path-selection algorithm, and an ultrasonic stop-look routine triggered within 15 cm of a wall. The rover completed both challenges on competition day and was one of only three teams in our section to use closed-loop feedback for the maze."
    },
    {
      id: "pid-controlled-ruler",
      title: "PID-Controlled Ruler",
      organization: "Toronto Metropolitan University",
      categories: ["Software", "Electrical", "Mechanical"],
      image: "assets/img/portfolio/projects/pid-controlled-ruler.jpg",
      video: "assets/video/portfolio/pid-controlled-ruler/pid-ruler-demo.mp4",
      videoPoster: false,
      alt: "PID-controlled ruler prototype with dial and electronics",
      lead: "A device that converts nonlinear distance-sensor measurements into the angular position of a motor-driven dial.",
      overview: "The device integrated sensing, signal conditioning, closed-loop motor control, and custom mechanical components to provide a readable physical indication of target distance.",
      challenge: "Raw sensor measurements were nonlinear and noisy, requiring calibration and filtering before they could serve as a stable control input for the dial mechanism.",
      results: "Our team applied a low-pass filter, fitted a polynomial calibration curve, manually tuned PID gains, and drove the DC motor with PWM. I contributed primarily to the calibration curves, electrical and mechanical design, including custom SolidWorks components, and assisted with the LabVIEW implementation. The completed prototype accurately displayed target distance on the dial."
    },
    {
      id: "imitation-learning-xarm",
      title: "Imitation Learning for UFactory xArm 850",
      organization: "ELIXIR Lab",
      categories: ["Software", "Machine Learning"],
      image: "assets/img/portfolio/projects/imitation-learning-xarm.jpg",
      video: "assets/video/portfolio/imitation-learning-xarm/imitation-learning-demo-4x.mp4",
      videoPoster: false,
      alt: "UFactory xArm 850 robotic manipulator",
      lead: "A ROS 2 and PyTorch imitation-learning project that predicts robotic-arm motion toward task-defined target locations.",
      overview: "The project established an end-to-end workflow for collecting demonstrations, training an imitation learning policy, and controlling a UFactory xArm 850 through live joint state feedback.",
      challenge: "The system needed synchronized trajectory data and a reliable feedback loop capable of translating model predictions into safe, repeatable arm motion.",
      results: "I created ROS 2 nodes to load trajectories from CSV, command inverse-kinematics motion, and record joint positions at a fixed rate. A deep neural network trained on this dataset was integrated with ROS 2 feedback and the xArm SDK. The model reached specified targets marked on the table and demonstrated interpolation to position IDs outside the training set."
    },
    {
      id: "ai-payload-camera",
      title: "AI Payload Camera System",
      organization: "MetRocketry",
      categories: ["Software", "Electrical", "Machine Learning"],
      image: "assets/img/portfolio/projects/ai-payload-camera.png",
      galleryReplacesImage: true,
      galleryLayout: "stacked",
      gallery: [
        {
          src: "assets/img/portfolio/projects/ai-payload-camera.png",
          alt: "Aerial scene processed by the AI payload's detection model"
        },
        {
          src: "assets/img/portfolio/projects/ai-payload/terrain-segmentation-result.png",
          alt: "AI payload terrain segmentation identifying buildings, vegetation, and surface types"
        }
      ],
      alt: "Aerial scene processed by object detection and segmentation models",
      lead: "An AI computer vision payload for terrain segmentation, building detection, and rescue-surveillance.",
      overview: "The project combines custom aerial datasets, YOLO-based detection and segmentation models, and real-time OpenCV inference on embedded hardware.",
      challenge: "Aerial imagery presents large changes in scale, viewing angle, and terrain appearance, while the final models must run efficiently on a Jetson Orin Nano paired with an Arducam camera.",
      results: "I annotated and augmented custom datasets with Roboflow and Label Studio, trained multiple YOLO models using Google Colab GPU resources, and developed Python/OpenCV scripts for live instance segmentation. The resulting models achieved approximately 70% mean average precision and successfully identified objects and terrain regions in representative scenes."
    },
    {
      id: "solar-panel-controller",
      title: "Solar Panel Controller",
      organization: "Toronto Metropolitan University",
      categories: ["Software"],
      image: "assets/img/portfolio/projects/solar-panel/panel-simulation.png",
      video: "assets/video/portfolio/solar-panel-controller/scenario-3.mp4",
      videoPoster: false,
      galleryLayout: "solar-compact",
      gallery: [
        {
          src: "assets/img/portfolio/projects/solar-panel/scenario-3-performance.png",
          alt: "Scenario 3 plots comparing target, true, and noisy sensed panel angles with sensor error"
        }
      ],
      alt: "Solar panel tracking simulation in Gazebo",
      lead: "A ROS 2 proportional-derivative controller that keeps a simulated solar panel aligned with the sun under disturbances and sensor noise.",
      overview: "The controller was evaluated in three Gazebo scenarios: baseline trajectory following, wind disturbance, and combined sensor drift with quantization error.",
      challenge: "The panel had to track a moving target accurately despite external torque disturbances and degraded feedback measurements.",
      results: "I built the simulation in Gazebo Ignition on Ubuntu 22.04 and used ROS 2 Humble publishers and subscribers for responsive data exchange. The controller followed the sun trajectory in all three scenarios; even the most demanding noisy-sensor case produced a mean absolute error of only 0.1502 radians."
    },
    {
      id: "six-dof-robotic-arm",
      title: "6-DOF Robotic Arm",
      organization: "Toronto Metropolitan University",
      categories: ["Software"],
      image: "assets/img/portfolio/projects/six-dof-robotic-arm.png",
      galleryLayout: "arm",
      videos: [
        {
          src: "assets/video/portfolio/six-dof-robotic-arm/trajectory-1.mp4",
          label: "First 6-DOF robotic arm trajectory animation",
          orientation: "landscape"
        },
        {
          src: "assets/video/portfolio/six-dof-robotic-arm/trajectory-2.mp4",
          label: "Second 6-DOF robotic arm trajectory animation",
          orientation: "landscape"
        }
      ],
      gallery: [
        {
          src: "assets/img/portfolio/projects/six-dof-robotic-arm/joint-velocities.png",
          alt: "Joint velocities over time for the 6-DOF robotic arm trajectory"
        }
      ],
      alt: "Six degree-of-freedom robotic arm simulation",
      lead: "A MATLAB implementation of manipulator kinematics, path planning, and Euler-Lagrange dynamics for a six-joint robotic arm.",
      overview: "The project translated core robotics theory into a complete mathematical and simulation workflow covering forward kinematics, Jacobians, inverse kinematics, trajectory generation, and dynamics.",
      challenge: "The dynamic model required deriving coupled inertial, Coriolis, and gravitational effects from link geometry and inertia tensors, then solving the resulting nonlinear motion equations.",
      results: "I computed the inertia matrix from partial Jacobians, formed the Christoffel-based Coriolis matrix and gravity vector, and used ODE solvers to simulate joint position and velocity. The completed model represented the manipulator through multiple consistent mathematical formulations and validated the full analysis pipeline."
    },
    {
      id: "camera-drone-mount",
      title: "Camera Drone Mount",
      organization: "MetRocketry",
      categories: ["Mechanical"],
      image: "assets/img/portfolio/projects/camera-drone-mount.jpg",
      alt: "Camera mount installed beneath a payload drone",
      lead: "A custom 3D-printed mount engineered to secure MetRocketry's payload camera during a drone test campaign.",
      overview: "The mount provided a connection between the camera and the existing payload-drone plate.",
      challenge: "The design had to respect the camera and existing CAD geometry, available mounting points, and the physical constraints of the drone assembly.",
      results: "I modelled the mount in SolidWorks using the camera and drone-plate dimensions, then prepared and printed it using Bambu Studio. The installed mount successfully supported the camera and captured footage during the drone test launch."
    },
    {
      id: "mechanical-arm-mk2",
      title: "Mechanical Arm with Gripper Mk2",
      organization: "Toronto Metropolitan University",
      categories: ["Mechanical"],
      image: "assets/img/portfolio/projects/mechanical-arm-mk2.png",
      galleryReplacesImage: true,
      galleryLayout: "mk2",
      gallery: [
        {
          src: "assets/img/portfolio/projects/mechanical-arm-mk2.png",
          alt: "Side view of the second-generation mechanical arm and gripper assembly"
        },
        {
          src: "assets/img/portfolio/projects/mechanical-arm-mk2/gripper-closed.png",
          alt: "Mechanical gripper Mk2 shown in its closed position"
        },
        {
          src: "assets/img/portfolio/projects/mechanical-arm-mk2/gripper-open.png",
          alt: "Mechanical gripper Mk2 shown in its open position"
        }
      ],
      alt: "Second-generation motor-compatible mechanical arm and gripper",
      lead: "A redesigned four-bar arm and gripper developed for independent rotary actuation and object manipulation.",
      overview: "The concept pairs a crank-rocker arm with a rocker-rocker gripper, allowing the arm and end effector to be driven independently by DC or servo motors.",
      challenge: "The linkage geometry must be able to cover the desired workspace and grasp objects while remaining compatible with rotary actuators and avoiding invalid mechanism configurations.",
      results: "My team and I performed graphical synthesis and applied Grashof's criterion to determine the geometry of the mechanism, then designed, assembled, and rendered the mechanism in SolidWorks. We then performed reach analysis to verify the motion path and maximum/minimum operating conditions. The final concept established a foundation for motorized actuation."
    }
  ];

  const projectOrder = [
    "imitation-learning-xarm",
    "soft-robot-prototype",
    "ai-payload-camera",
    "line-maze-robot",
    "six-dof-robotic-arm",
    "solar-panel-controller",
    "pid-controlled-ruler",
    "mechanical-arm-mk2",
    "camera-drone-mount",
    "mechanical-arm-gripper"
  ];
  projects.sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id));

  const params = new URLSearchParams(window.location.search);
  const currentIndex = projects.findIndex((project) => project.id === params.get("project"));
  const project = projects[currentIndex];

  if (!project) {
    window.location.replace("portfolio.html");
    return;
  }

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };

  document.title = `Joel Valley - ${project.title}`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", project.lead);
  setText("project-title", project.title);
  setText("project-subtitle", project.organization);
  setText("project-badge", project.categories.join(" · "));
  setText("project-heading", project.title);
  setText("project-lead", project.lead);
  setText("project-overview", project.overview);
  setText("project-challenge", project.challenge);
  setText("project-results", project.results);

  const image = document.getElementById("project-image");
  image.src = project.image;
  image.alt = project.alt;
  image.hidden = Boolean(project.video || project.videos?.length || project.galleryReplacesImage);

  const video = document.getElementById("project-video");
  if (project.video) {
    video.src = project.video;
    if (project.videoPoster !== false) {
      video.poster = project.image;
    }
    video.setAttribute("aria-label", `${project.title} demonstration video`);
    video.hidden = false;
    video.play().catch(() => {
      // The visible controls allow playback when a browser blocks autoplay.
    });
  }

  const gallery = document.getElementById("project-gallery");
  if (project.galleryLayout === "stacked") {
    gallery.classList.add("project-gallery-stacked");
  }
  if (project.galleryLayout === "arm") {
    gallery.classList.add("project-gallery-arm");
  }
  if (project.galleryLayout === "mk2") {
    gallery.classList.add("project-gallery-mk2");
  }
  if (project.galleryLayout === "solar-compact") {
    gallery.classList.add("project-gallery-solar-compact");
    gallery.closest(".project-figure")?.classList.add("project-figure-solar-compact");
  }
  if (project.videos?.length) {
    gallery.classList.add("project-video-gallery");
    project.videos.forEach((item) => {
      const galleryVideo = document.createElement("video");
      galleryVideo.src = item.src;
      galleryVideo.setAttribute("aria-label", item.label);
      galleryVideo.className = `project-gallery-video project-gallery-video-${item.orientation}`;
      galleryVideo.controls = true;
      galleryVideo.muted = true;
      galleryVideo.autoplay = true;
      galleryVideo.loop = true;
      galleryVideo.playsInline = true;
      galleryVideo.preload = "auto";
      gallery.appendChild(galleryVideo);
      galleryVideo.play().catch(() => {
        // The visible controls allow playback when a browser blocks autoplay.
      });
    });
  }

  if (project.gallery?.length) {
    project.gallery.forEach((item) => {
      const galleryImage = document.createElement("img");
      galleryImage.src = item.src;
      galleryImage.alt = item.alt;
      galleryImage.className = "project-gallery-photo";
      galleryImage.loading = "lazy";
      gallery.appendChild(galleryImage);
    });
  }

  gallery.hidden = !(project.videos?.length || project.gallery?.length);

  const tags = document.getElementById("project-tags");
  project.categories.forEach((category) => {
    const tag = document.createElement("span");
    tag.textContent = category;
    tags.appendChild(tag);
  });

  const next = projects[(currentIndex + 1) % projects.length];
  document.getElementById("next-project").href = `project.html?project=${encodeURIComponent(next.id)}`;
})();

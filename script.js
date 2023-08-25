//dataBase notification
let notification = [
  {
    id: "e1",
    title: "William Philips",
    img: "https://i.ibb.co/NrpVc2Y/istockphoto-1162206916-612x612.jpg",
    message: "Uploaded 4 new pictures into album",
    keyword: "Landskapes",
    state: 0,
  },
  {
    id: "e2",
    title: "Shane Wilis",
    img: "https://i.ibb.co/yFTVfGR/blackman.jpg",
    message: "Rated your page",
    keyword: "ildiesign",
    state: 2,
  },
  {
    id: "e3",
    title: "Harriet Waters",
    img: "https://i.ibb.co/qxFnL4N/smilingman-sitting-inside.jpg",
    message: "Commented on your post",
    keyword: "BreakFast",
    state: 1440,
  },
  {
    id: "e4",
    title: "Harriet Waters",
    img: "https://i.ibb.co/GdJz0C4/kenya-photo.jpg",
    message: "Uoloaded 6 new pictures into album Trips 2018.",
    keyword: "",
    state: 1440,
  },
  {
    id: "e5",
    title: "josuf adam",
    img: "https://i.ibb.co/GxD5wFL/ceo-image.jpg",
    message: "Commented on your post.",
    keyword: "hiMan",
    state: 2880,
  },
  {
    id: "e6",
    title: "Ahmad ali",
    img: "https://i.ibb.co/QfPs33w/Abhisek-Tamang.jpg",
    message: "Commented on your post.",
    keyword: "hiMan",
    state: 2880,
  },
  {
    id: "e7",
    title: "Steff jobs",
    img: "https://i.ibb.co/qFvkqd7/istockphoto-1296158947-612x612.jpg",
    message: "Share your post.",
    keyword: "It's me (:",
    state: 4320,
  },
];

const nofiContainer = document.querySelector(".content");
const btnView = document.querySelector(".btn-view");
const cartContainer = document.querySelector(".cart");
const notificationBtn = document.querySelector(".nofication-btn");
function modifieState(value) {
  if (value >= 0 && value < 1) {
    return "Just Now";
  }
  if (value >= 2 && value < 60) {
    return `${value} minute ago`;
  }
  if (value >= 60 && value < 1440) {
    return `${Math.round(value / 60)} houre ago`;
  }
  if (1440 < value < 10080) {
    return `${Math.round(value / 1440)} day ago`;
  }
}
function renderNotification() {
  let liTagElement = "";
  notification.forEach((item) => {
    const notificationState = modifieState(item.state);
    const liTag = `<li class="item">
                    <img class="photo" src=${item.img}
                        alt="photo profielo" />
                    <div class="content-text-item">
                        <p class="full-name">${item.title}</p>
                        <p class="message">${item.message}<span
                                class="keyword">${item.keyword}</span>.</span></p>
                        <p class="state">${notificationState}</p>
                    </div>
                </li>`;
    liTagElement += liTag;
  });
  nofiContainer.innerHTML = liTagElement;
}
function addEventListenerTobtnView() {
  console.log("btj");
  btnView.addEventListener("click", () => {
    // show notification
    if (nofiContainer.classList.toggle("height")) {
      btnView.textContent = "Hidd All";
    } else {
      btnView.textContent = "view all";
    }
  });
}
function addEventListenerToNotificationBtn() {
  notificationBtn.addEventListener("click", () => {
    cartContainer.classList.toggle("cart-animation-out");
  });
}

renderNotification();
addEventListenerTobtnView();
addEventListenerToNotificationBtn();

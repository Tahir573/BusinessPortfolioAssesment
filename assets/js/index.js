// contact form submission
document.getElementById("contact").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const content = `--------------------------
    Date: ${new Date().toLocaleString()}
    Name: ${data.get("name")}
    Email: ${data.get("email")}
    Subject: ${data.get("subject")}
    Contact: ${data.get("phone")}
    Message:
    ${data.get("message")}

    `;

  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "contact.txt";
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  form.reset();

  const msg = document.getElementById("success-msg");
  msg.style.display = "block";
  setTimeout(() => (msg.style.display = "none"), 5000);
});
//Navigation Active State on Scroll

//according to loftblog tut
$(".nav li:first").addClass("active");

var showSection = function showSection(section, isAnimate) {
  var direction = section.replace(/#/, ""),
    reqSection = $(".section").filter('[data-section="' + direction + '"]'),
    reqSectionPos = reqSection.offset().top - 0;

  if (isAnimate) {
    $("body, html").animate(
      {
        scrollTop: reqSectionPos,
      },
      800
    );
  } else {
    $("body, html").scrollTop(reqSectionPos);
  }
};

var checkSection = function checkSection() {
  $(".section").each(function () {
    var $this = $(this),
      topEdge = $this.offset().top - 80,
      bottomEdge = topEdge + $this.height(),
      wScroll = $(window).scrollTop();
    if (topEdge < wScroll && bottomEdge > wScroll) {
      var currentId = $this.data("section"),
        reqLink = $("a").filter("[href*=\\#" + currentId + "]");
      reqLink.closest("li").addClass("active").siblings().removeClass("active");
    }
  });
};

$(".main-menu, .responsive-menu, .scroll-to-section").on(
  "click",
  "a",
  function (e) {
    e.preventDefault();
    showSection($(this).attr("href"), true);
  }
);

$(window).scroll(function () {
  checkSection();
});

//<!-- DISCOUNT SCRIPT -->
    document.addEventListener("DOMContentLoaded", () => {
    const LIMIT = 1000;
    const DISCOUNT = 0.10;

    document.querySelectorAll(".course-price").forEach(el => {
        const basePrice = Number(el.dataset.price);
        const wrapper = el.closest(".price");
        const badge = wrapper.querySelector(".discount-badge");
        const original = wrapper.querySelector(".original-price");

        if (basePrice > LIMIT) {
        const discounted = basePrice * (1 - DISCOUNT);

        badge.classList.remove("d-none");
        original.classList.remove("d-none");

        original.textContent = `₹${basePrice.toFixed(2)}`;
        el.textContent = `₹${discounted.toFixed(2)}`;
        } else {
        el.textContent = `₹${basePrice.toFixed(2)}`;
        }
    });
    });

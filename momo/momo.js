(function horizontalScrollingBanner() {
  const banners = document.getElementsByClassName(
    "horizontal-scrolling-banner"
  );
  if (!banners || banners.length === 0) {
    return;
  }
  const pxPerSecond = 50;
  setUpElements();
  scrollTheBanners();
  window.addEventListener("resize", setUpElements);

  function setUpElements() {
    for (let i = 0; i < banners.length; i++) {
      const currentBanner = banners[i];
      const helperWrapperClass = "horizontal-scrolling-banner__helper-wrapper";
      const currentHelperWrapper = currentBanner.querySelector(
        "." + helperWrapperClass
      );
      if (currentHelperWrapper) {
        const clones = currentHelperWrapper.querySelectorAll("[data-clone]");
        Array.prototype.forEach.call(clones, function (clone) {
          clone.remove();
        });
        const childrenCount = currentHelperWrapper.children.length;
        for (let i = 0; i < childrenCount; i++) {
          currentBanner.appendChild(currentHelperWrapper.children[0]);
        }
        currentHelperWrapper.remove();
      }

      const children = currentBanner.children;

      const bannerWidth = currentBanner.getBoundingClientRect().width;
      const minWidthToCoverBanner =
        bannerWidth * 2 + children[0].getBoundingClientRect().width;
      const childrenWidth = Array.prototype.reduce.call(
        children,
        function (r, child) {
          return r + child.getBoundingClientRect().width;
        },
        0
      );
      let currentWidth = childrenWidth;

      do {
        Array.prototype.forEach.call(children, function (child) {
          const clone = child.cloneNode();
          clone.setAttribute("aria-hidden", true);
          clone.dataset.clone = true;
          currentBanner.appendChild(clone);
        });
        currentWidth += childrenWidth;
      } while (currentWidth < minWidthToCoverBanner);

      const transitionHelperWrapper = document.createElement("div");
      transitionHelperWrapper.classList.add(
        "horizontal-scrolling-banner__helper-wrapper"
      );
      const childrenCount = children.length;
      for (let i = 0; i < childrenCount; i++) {
        transitionHelperWrapper.appendChild(children[0]);
      }
      currentBanner.appendChild(transitionHelperWrapper);
      transitionHelperWrapper.dataset.childrenWidth = childrenWidth;
    }
  }

  function scrollTheBanners() {
    for (let i = 0; i < banners.length; i++) {
      const helperWrapper = banners[i].firstElementChild;
      const childrenWidth = helperWrapper.dataset.childrenWidth;
      const offsetLeft = helperWrapper.offsetLeft;

      if (offsetLeft <= childrenWidth * -1) {
        helperWrapper.style.transitionDuration = "0s";
        helperWrapper.style.left = "0px";
        helperWrapper.style.removeProperty("transition-duration");
      } else if (
        helperWrapper.style.left === "" ||
        helperWrapper.style.left === "0px"
      ) {
        setTimeout(function () {
          helperWrapper.style.transitionDuration =
            (childrenWidth / pxPerSecond).toFixed() + "s";
          helperWrapper.style.left = childrenWidth * -1 + "px";
        }, 0);
      }
    }
    requestAnimationFrame(scrollTheBanners);
  }
})();

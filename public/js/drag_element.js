// document.addEventListener("DOMContentLoaded", (event) => {
//   var dragSrcEl = null;

//   function handleDragStart(e) {
//     this.style.opacity = "0.4";

//     dragSrcEl = this;

//     e.dataTransfer.effectAllowed = "move";
//     e.dataTransfer.setData("text/html", this.innerHTML);
//   }

//   function handleDragOver(e) {
//     if (e.preventDefault) {
//       e.preventDefault();
//     }

//     e.dataTransfer.dropEffect = "move";

//     return false;
//   }

//   function handleDragEnter(e) {
//     this.classList.add("dragging_over");
//   }

//   function handleDragLeave(e) {
//     this.classList.remove("dragging_over");
//   }

//   function handleDrop(e) {
//     if (e.stopPropagation) {
//       e.stopPropagation(); // stops the browser from redirecting.
//     }

//     if (dragSrcEl != this) {
//       dragSrcEl.innerHTML = this.innerHTML;
//       this.innerHTML = e.dataTransfer.getData("text/html");
//     }

//     return false;
//   }

//   function handleDragEnd(e) {
//     this.style.opacity = "1";

//     items.forEach(function (item) {
//       item.classList.remove("dragging_over");
//     });
//   }

//   let items = document.querySelectorAll(".dragable");
//   items.forEach(function (item) {
//     item.addEventListener("dragstart", handleDragStart, false);
//     item.addEventListener("dragenter", handleDragEnter, false);
//     item.addEventListener("dragover", handleDragOver, false);
//     item.addEventListener("dragleave", handleDragLeave, false);
//     item.addEventListener("drop", handleDrop, false);
//     item.addEventListener("dragend", handleDragEnd, false);
//   });
// });

const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".dragable-container");

draggables.forEach((item) => {
  if (!item.hasAttribute("draggable")) {
    item.setAttribute("draggable", "true");
  }
});

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", (e) => {
    draggable.classList.add("dragging");

    // // Making a clone for ghost image
    // let clone = draggable.cloneNode(true);
    // clone.style.position = "absolute";
    // clone.style.top = "0";
    // clone.style.left = "0";
    // clone.style.zIndex = "-1";
    

    // draggable.appendChild(clone);
    // e.dataTransfer.setDragImage(clone, 0, 0);

    // window.setTimeout(function () {
    //   clone.parentNode.removeChild(clone);
    // }, 100);
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

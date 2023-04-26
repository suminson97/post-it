const contentElement = document.getElementById("content");
const memoListElement = document.getElementById("memo-list");

function saveMemo() {
  const myBtn = document.querySelector(".btn");
  myBtn.textContent = "^0^";
  const memo = contentElement.value;

  if (memo) {
    const memoId = Date.now().toString();
    const memoItemElement = document.createElement("li");
    memoItemElement.textContent = memo;
    const deleteButtonElement = document.createElement("button");
    deleteButtonElement.textContent = "X";
    deleteButtonElement.classList.add("deleteBtn");
    deleteButtonElement.addEventListener("click", () => {
      const memos = JSON.parse(localStorage.getItem("memos")) || [];
      const updatedMemos = memos.filter((m) => m.id !== memoId);
      localStorage.setItem("memos", JSON.stringify(updatedMemos));
      memoListElement.removeChild(memoItemElement);
    });

    memoItemElement.appendChild(deleteButtonElement);
    memoListElement.appendChild(memoItemElement);

    const memos = JSON.parse(localStorage.getItem("memos")) || [];
    memos.push({ id: memoId, content: memo });
    localStorage.setItem("memos", JSON.stringify(memos));
    contentElement.value = "";
  }
}
function render() {
  const memos = JSON.parse(localStorage.getItem("memos"));
  memos.forEach((memo) => {
    const memoItemElement = document.createElement("li");
    memoItemElement.textContent = memo.content;
    const deleteButtonElement = document.createElement("button");
    deleteButtonElement.textContent = "X";
    deleteButtonElement.classList.add("deleteBtn");
    deleteButtonElement.addEventListener("click", () => {
      const memos = JSON.parse(localStorage.getItem("memos")) || [];
      const updatedMemos = memos.filter((m) => m.id !== memo.id);
      localStorage.setItem("memos", JSON.stringify(updatedMemos));
      memoListElement.removeChild(memoItemElement);
    });
    memoItemElement.appendChild(deleteButtonElement);
    memoListElement.appendChild(memoItemElement);
  });
}
if (localStorage.getItem("memos")) {
  render();
}

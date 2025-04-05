const btnAdd = document.querySelector("#btn-add");
const containerList = document.querySelector("#container-list");
const searchInput = document.querySelector("#input");

btnAdd.addEventListener("click", () => {
  window.location.href = "addNotes.html";
});

btnAdd.addEventListener("mouseenter", () => {
  btnAdd.classList.add("cursor-pointer", "hover:scale-110", "transition", "duration-200");
});

const loadNotes = () => {
  const notes = JSON.parse(localStorage.getItem("listItem")) || [];
  containerList.innerHTML = "";

  if (notes.length === 0) {
    containerList.innerHTML = "<p class='text-center text-gray-500'>Belum ada catatan.</p>";
    return;
  }

  notes.forEach((note, index) => {
    const containerNotes = document.createElement("div");
    const headContainer = document.createElement("div");
    const title = document.createElement("h2");
    const containerParagraf = document.createElement("div");
    const paragraf = document.createElement("p");
    const date = document.createElement("p");

    const actionContainer = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    containerNotes.classList.add("w-42", "md:w-70", "max-h-60", "md:h-[50vh]", "bg-[#F6F8D5]", "p-4", "rounded-2xl", "flex", "flex-col", "gap-y-3", "shadow-md");
    headContainer.classList.add("flex", "flex-row", "justify-between");
    title.classList.add("text-[#205781]", "font-bold", "text-lg");
    containerParagraf.classList.add("max-h-90", "overflow-hidden");
    paragraf.classList.add("text-[#205781]", "text-base");
    date.classList.add("text-[#205781]", "text-sm", "bg-[#98D2C0]", "p-1", "rounded-full", "text-center");
    actionContainer.classList.add("flex", "justify-center", "gap-3");
    editButton.classList.add("text-sm", "bg-yellow-400", "px-3", "py-1", "rounded-full", "text-white", "hover:bg-yellow-500");
    deleteButton.classList.add("text-sm", "bg-red-500", "px-3", "py-1", "rounded-full", "text-white", "hover:bg-red-600");

    title.textContent = note.titleNotes;
    paragraf.textContent = note.listNotes;
    date.textContent = new Date(note.createdAt).toLocaleString("id-ID");
    editButton.textContent = "Lihat";
    deleteButton.textContent = "X";

    // Edit
    editButton.addEventListener("click", () => {
      localStorage.setItem("editIndex", index);
      window.location.href = "addNotes.html";
    });

    // Delete
    deleteButton.addEventListener("click", () => {
      notes.splice(index, 1);
      localStorage.setItem("listItem", JSON.stringify(notes));
      loadNotes(); // Harus dipanggil, bukan loadNotes;
    });

    containerParagraf.appendChild(paragraf);
    actionContainer.appendChild(editButton);
    actionContainer.appendChild(deleteButton);
    headContainer.appendChild(title);
    headContainer.appendChild(actionContainer);

    containerNotes.appendChild(headContainer);
    containerNotes.appendChild(containerParagraf);
    containerNotes.appendChild(date);
    containerList.appendChild(containerNotes);
  });
};

document.addEventListener("DOMContentLoaded", loadNotes);

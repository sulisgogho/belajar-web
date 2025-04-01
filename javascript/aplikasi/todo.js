const inputNote = document.querySelector("#inputNote");
const sendNote = document.querySelector("#sendNote");
const notesList = document.querySelector("#notes");

// Ambil data catatan dari localStorage atau buat array kosong jika tidak ada
let noteItems = JSON.parse(localStorage.getItem("noteItems")) || [];

// Tampilkan catatan yang ada di localStorage saat halaman dimuat
noteItems.forEach((noteText) => {
  const noteItem = createNoteItem(noteText);
  notesList.appendChild(noteItem);
});

sendNote.addEventListener("click", addNote);

function addNote() {
  const noteText = inputNote.value.trim();

  if (!noteText) {
    alert("Please input your task");
    return;
  }

  noteItems.push(noteText);
  // Simpan data catatan ke localStorage
  localStorage.setItem("noteItems", JSON.stringify(noteItems));

  const noteItem = createNoteItem(noteText);
  notesList.appendChild(noteItem);
  inputNote.value = "";
}

function createNoteItem(noteText) {
  const listItem = document.createElement("li");
  listItem.classList.add("bg-green-200", "rounded-md", "py-2", "px-4", "my-3", "flex", "justify-between", "items-center", "w-xs", "md:w-4xl");

  const textElement = document.createElement("span");
  textElement.textContent = noteText;

  const actionsContainer = document.createElement("div");
  actionsContainer.classList.add("flex", "gap-x-3");

  const editButton = createButton("Edit", "bg-orange-300");
  const deleteButton = createButton("Delete", "bg-red-700", "text-white");

  deleteButton.addEventListener("click", () => {
    listItem.remove();
    // Update data catatan di localStorage setelah menghapus catatan
    updateNoteItems();
  });
  editButton.addEventListener("click", () => editNote(listItem, textElement, actionsContainer));

  actionsContainer.append(editButton, deleteButton);
  listItem.append(textElement, actionsContainer);
  return listItem;
}

function createButton(text, ...classes) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add(...classes, "py-1", "px-3", "rounded");
  return button;
}

function editNote(listItem, textElement, actionsContainer) {
  const inputEdit = document.createElement("input");
  inputEdit.value = textElement.textContent;
  inputEdit.classList.add("flex", "mx-3", "px-4", "focus:outline-none");

  const saveButton = createButton("Simpan", "bg-blue-500", "text-white");

  listItem.innerHTML = "";
  actionsContainer.innerHTML = "";

  saveButton.addEventListener("click", () => {
    if (inputEdit.value.trim()) {
      textElement.textContent = inputEdit.value.trim();
    }
    rebuildNoteItem(listItem, textElement, actionsContainer);
    // Update data catatan di localStorage setelah mengedit catatan
    updateNoteItems();
  });

  actionsContainer.appendChild(saveButton);
  listItem.append(inputEdit, actionsContainer);
  inputEdit.focus();
}

function rebuildNoteItem(listItem, textElement, actionsContainer) {
  const editButton = createButton("Edit", "bg-orange-300");
  const deleteButton = createButton("Delete", "bg-red-700", "text-white");

  deleteButton.addEventListener("click", () => {
    listItem.remove();
    // Update data catatan di localStorage setelah menghapus catatan
    updateNoteItems();
  });
  editButton.addEventListener("click", () => editNote(listItem, textElement, actionsContainer));

  actionsContainer.innerHTML = "";
  actionsContainer.append(editButton, deleteButton);

  listItem.innerHTML = "";
  listItem.append(textElement, actionsContainer);
}

// Fungsi untuk memperbarui data catatan di localStorage
function updateNoteItems() {
  noteItems = Array.from(notesList.querySelectorAll("span")).map((span) => span.textContent);
  localStorage.setItem("noteItems", JSON.stringify(noteItems));
}

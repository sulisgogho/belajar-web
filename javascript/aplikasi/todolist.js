const inputTodo = document.querySelector("#inputTodo");
const buttonAdd = document.querySelector("#buttonAdd");
const notes = document.querySelector("#notes");

buttonAdd.addEventListener("click", function () {
  const noteValue = inputTodo.value.trim();

  if (noteValue === "") {
    return;
  }

  const hasil = document.createElement("li");
  const buttonEdit = document.createElement("button");
  const buttonDelete = document.createElement("button");
  const container = document.createElement("div");

  buttonEdit.innerText = "Edit";
  buttonDelete.innerText = "Delete";

  hasil.classList.add("bg-green-200", "rounded-md", "p-2", "flex", "flex-row", "justify-between", "items-center");
  container.classList.add("flex", "flex-row", "gap-x-3");
  buttonEdit.classList.add("bg-orange-300", "py-1", "px-3", "rounded");
  buttonDelete.classList.add("bg-red-700", "py-1", "px-3", "rounded", "text-white");

  hasil.textContent = noteValue;
  hasil.dataset.originalText = noteValue;

  notes.appendChild(hasil);
  hasil.appendChild(container);
  container.appendChild(buttonDelete);
  container.appendChild(buttonEdit);

  inputTodo.value = "";

  buttonDelete.addEventListener("click", function () {
    hasil.remove();
  });

  buttonEdit.addEventListener("click", function () {
    const inputEdit = document.createElement("input");
    inputEdit.value = hasil.dataset.originalText;
    inputEdit.classList.add("flex-grow", "mx-3");
    hasil.innerHTML = "";
    hasil.appendChild(inputEdit);
    inputEdit.focus();

    const newContainer = document.createElement("div"); // Buat container baru
    const buttonSave = document.createElement("button");
    buttonSave.innerText = "Simpan";
    buttonSave.classList.add("bg-blue-500", "py-1", "px-3", "rounded", "text-white");
    newContainer.appendChild(buttonSave); // Tambahkan tombol simpan ke container baru

    hasil.appendChild(newContainer); // Tambahkan container baru ke hasil

    buttonSave.addEventListener("click", function () {
      hasil.textContent = inputEdit.value;
      hasil.dataset.originalText = inputEdit.value;
      hasil.innerHTML = inputEdit.value;
      hasil.appendChild(container); // Tambahkan container asli kembali
      container.appendChild(buttonDelete);
      container.appendChild(buttonEdit);
    });
  });
});

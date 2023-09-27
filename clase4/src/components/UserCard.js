function UserCard() {}

export function UserCardTemplate({
  image,
  firstName = "",
  lastName = "",
  company: { department = "" },
}) {
  return `
  <aside class="col-md-3">
    <div class="card">
      <img
        src="${image}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${firstName} ${lastName}</h5>
        <p class="card-text">${department}</p>
      </div>
    </div>
  </aside>
  `;
}

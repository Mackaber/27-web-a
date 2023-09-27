function createTags(array) {
  return array.map(({ tagName, classN }) => {
    const item = document.createElement(tagName);
    item.className = classN;

    return item;
  });
}

export function UserCard({
  image,
  firstName = "",
  lastName = "",
  company: { department = "" },
}) {
  const tags = [
    { tagName: "aside", classN: "col-md-3" },
    { tagName: "div", classN: "card" },
    { tagName: "img", classN: "card-img-top" },
    { tagName: "div", classN: "card-body" },
    { tagName: "h5", classN: "card-title" },
    { tagName: "p", classN: "card-text" },
  ];

  const [aside, divCard, img, divBody, h5, p] = createTags(tags);

  img.src = image;
  h5.textContent = `${firstName} ${lastName}`;
  p.textContent = department;

  aside.appendChild(divCard);
  divCard.appendChild(img);
  divCard.appendChild(divBody);
  divBody.appendChild(h5);
  divBody.appendChild(p);

  return aside;
}

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
        <button id="btnLike" class="btn btn-success">Like</button>
      </div>
    </div>
  </aside>
  `;
}

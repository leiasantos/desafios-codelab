const postCards = document.querySelectorAll('.post-card')
const favorites = document.querySelectorAll(".post__favorite")

postCards.forEach((postCard) =>{
  postCard.addEventListener('click', () =>{
  postCard.classList.toggle("border-color")
  })
})

favorites.forEach((favorite) =>{
  const favoriteIcon = favorite.querySelector("img")
  let isFavorite = false

  favorite.addEventListener("click" , (event) =>{
    event.stopPropagation()
      isFavorite = !isFavorite

    favoriteIcon.src = isFavorite
      ? "assets/icons/heart_active.svg"
      : "assets/icons/heart.svg";

    favorite.setAttribute(
      "aria-label",
      isFavorite
        ? "Remover dos favoritos"
        : "Adicionar aos favoritos"
    )
  })
})
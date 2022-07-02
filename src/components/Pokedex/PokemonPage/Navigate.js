export const prevPage = (id) => {
  if (id >= 1 && id <= 151) {
    if (id === 1) {
      window.location.pathname = '/pokedex/151';
    } else {
      window.location.pathname = `/pokedex/${id - 1}`;
    }
  }
  if (id >= 152 && id <= 251) {
    if (id === 152) {
      window.location.pathname = '/pokedex/251';
    } else {
      window.location.pathname = `/pokedex/${id - 1}`;
    }
  }
  if (id >= 252 && id <= 386) {
    if (id === 252) {
      window.location.pathname = '/pokedex/386';
    } else {
      window.location.pathname = `/pokedex/${id - 1}`;
    }
  }
};

export const nextPage = (id) => {
  if (id >= 1 && id <= 151) {
    if (id === 151) {
      window.location.pathname = '/pokedex/1';
    } else {
      window.location.pathname = `/pokedex/${id + 1}`;
    }
  }
  if (id >= 152 && id <= 251) {
    if (id === 251) {
      window.location.pathname = '/pokedex/152';
    } else {
      window.location.pathname = `/pokedex/${id + 1}`;
    }
  }
  if (id >= 252 && id <= 386) {
    if (id === 386) {
      window.location.pathname = '/pokedex/252';
    } else {
      window.location.pathname = `/pokedex/${id + 1}`;
    }
  }
};

export const backToPokedex = (id) => {
  if (id >= 1 && id <= 151) {
    window.location.pathname = '/pokedex/firstgen';
  }
  if (id >= 152 && id <= 251) {
    window.location.pathname = '/pokedex/secondgen';
  }
  if (id >= 252 && id <= 386) {
    window.location.pathname = '/pokedex/thirdgen';
  }
};

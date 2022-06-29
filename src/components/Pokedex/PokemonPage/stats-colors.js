export const statsColors = {
  orangered: 'linear-gradient(138deg, rgba(140,38,0,1) 0%, rgba(255,69,0,1) 100%)',
  gold: 'linear-gradient(138deg, rgba(156,131,0,1) 0%, rgba(255,215,0,1) 100%)',
  yellowgreen: 'linear-gradient(138deg, rgba(90,121,28,1) 0%, rgba(154,205,50,1) 100%)',
  mediumseagreen: 'linear-gradient(138deg, rgba(35,103,65,1) 0%, rgba(60,179,113,1) 100%)',
  darkturquoise: 'linear-gradient(138deg, rgba(0,134,166,1) 0%, rgba(0,255,231,1) 100%)',
};

export const statBarColor = (stat, stats_colors) => {
  let width = stat.base_stat;
  let color = '';
  if (width >= 150) {
    color = stats_colors.darkturquoise;
  } else if (width >= 100) {
    color = stats_colors.mediumseagreen;
  } else if (width >= 69) {
    color = stats_colors.yellowgreen;
  } else if (width >= 29) {
    color = stats_colors.gold;
  } else {
    color = stats_colors.orangered;
  }
  return color;
};

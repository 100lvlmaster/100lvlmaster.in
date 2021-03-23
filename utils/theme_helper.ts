/// Fetch Theme from storage
export const getTheme = () => {
  const themeVal: string = localStorage.getItem("theme");
  return themeVal ?? "dark";
};

/// Save theme to storage
export const saveTheme = (val: string) => {
  localStorage.setItem("theme", val);
};

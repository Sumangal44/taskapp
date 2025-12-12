import { ThemeContext } from "@/components/theme-provider";
import { useContext } from "react";
export const useTheme = () => useContext(ThemeContext);
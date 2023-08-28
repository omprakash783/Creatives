import { useMemo } from "react";
import debounce from "../utils/debounce";

export default function useDebounce(callback, delay, deps) {
  return useMemo(() => debounce(callback, delay), deps);
}

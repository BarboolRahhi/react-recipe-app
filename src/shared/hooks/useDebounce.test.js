import { renderHook } from "@testing-library/react";
import { useDebounce } from "./useDebounce";
import { act } from "react-dom/test-utils";

describe("useDebounce", () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Enable fake timers
  });

  afterEach(() => {
    jest.runOnlyPendingTimers(); // Run any pending timers after each test
    jest.useRealTimers(); // Restore real timers
  });

  it("debounces input value", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "a", delay: 500 },
      }
    );

    expect(result.current).toBe("a"); // initial value test

    act(() => {
      rerender({ value: "b", delay: 500 }); // Rerender hook with new value 'b'
    });

    act(() => {
      jest.advanceTimersByTime(400); // Fast-forward timer by another 300ms
    });

    expect(result.current).toBe("a");

    act(() => {
      jest.advanceTimersByTime(100); // Fast-forward timer by another 300ms
    });

    expect(result.current).toBe("b");
  });
});

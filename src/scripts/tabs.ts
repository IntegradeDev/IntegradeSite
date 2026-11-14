export function initTabs(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>("[data-tabs]").forEach((container) => {
    if (container.dataset.tabsReady) return;
    container.dataset.tabsReady = "true";

    const tabs = Array.from(container.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    const select = (tab: HTMLButtonElement, focus = false) => {
      tabs.forEach((t) => {
        const selected = t === tab;
        t.setAttribute("aria-selected", String(selected));
        t.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(t.getAttribute("aria-controls") || "");
        if (panel) panel.hidden = !selected;
      });
      if (focus) tab.focus();
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => select(tab));
      tab.addEventListener("keydown", (e) => {
        const vertical = container.dataset.tabsOrientation === "grid";
        let next = -1;
        if (e.key === "ArrowRight" || (vertical && e.key === "ArrowDown")) next = (i + 1) % tabs.length;
        if (e.key === "ArrowLeft" || (vertical && e.key === "ArrowUp")) next = (i - 1 + tabs.length) % tabs.length;
        if (e.key === "Home") next = 0;
        if (e.key === "End") next = tabs.length - 1;
        if (next >= 0) {
          e.preventDefault();
          select(tabs[next], true);
        }
      });
    });
  });
}

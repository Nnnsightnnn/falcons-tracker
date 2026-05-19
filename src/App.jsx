import { useState } from "react";
import MagazineCover from "./MagazineView.jsx";
import MagazineSlate from "./MagazineSlate.jsx";
import MagazineRoster from "./MagazineRoster.jsx";
import MagazineDraft from "./MagazineDraft.jsx";
import MagazineFrontOffice from "./MagazineFrontOffice.jsx";
import MagazineWire from "./MagazineWire.jsx";

// ─── GAMEDAY & CO. — magazine site ───────────────────────────────────────
// Single magazine experience. Six pages flip via the in-page flipnav.
// No broadcast chrome — every page lives inside the same paper shell.

export default function FalconsTracker() {
  const [view, setView] = useState("cover");

  switch (view) {
    case "slate":        return <MagazineSlate setView={setView} />;
    case "roster":       return <MagazineRoster setView={setView} />;
    case "draft":        return <MagazineDraft setView={setView} />;
    case "front-office": return <MagazineFrontOffice setView={setView} />;
    case "wire":         return <MagazineWire setView={setView} />;
    case "cover":
    default:             return <MagazineCover setView={setView} />;
  }
}

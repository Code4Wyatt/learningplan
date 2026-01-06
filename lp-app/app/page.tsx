'use client'
import Split from "react-split";
import Chat from "@/components/Chat";
import Explore from "@/components/Explore";

export default function Home() {
  return (
    <div className="flex-1 h-full">
      <Split
        className="flex h-full"
        sizes={[35, 65]}
        minSize={[280, 200]}
        gutterSize={8}
        snapOffset={0}
      >
        <div className="overflow-auto">
          <Chat />
        </div>

        <div className="flex-1 overflow-auto">
          <Explore />
        </div>
      </Split>
    </div>
  );
}

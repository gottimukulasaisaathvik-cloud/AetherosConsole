'use client';

import { Satellite } from 'lucide-react';
import './station-3d-view.css';

export function Station3dView() {
  return (
    <div className="scene">
      <div className="sun" />
      <div className="earth-orbit">
        <div className="earth">
          <div className="moon-orbit">
            <div className="moon" />
          </div>
        </div>
        <div className="l4-point">
          <div className="station">
            <Satellite className="h-full w-full text-primary" />
          </div>
        </div>
      </div>
       <div className="labels">
        <div className="label-sun">Sun</div>
        <div className="label-earth">Earth</div>
        <div className="earth-orbit">
          <div className="earth">
              <div className="moon-orbit">
                  <div className="label-moon">Moon</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

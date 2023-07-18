import { CastButton } from './index.android';
declare class ProgressListenerImpl extends java.lang.Object implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
  owner: CastButton;
  constructor(owner: any);
  onProgressUpdated(progressMs: number, durationMs: number): void;
}
export { ProgressListenerImpl };

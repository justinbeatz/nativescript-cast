import { CastButton } from './index.android';
declare class RemoteMediaClientCallback extends com.google.android.gms.cast.framework.media.RemoteMediaClient.Callback {
  owner: CastButton;
  constructor(owner: any);
  onStatusUpdated(): void;
  onMetadataUpdated(): void;
  onQueueStatusUpdated(): void;
  onPreloadStatusUpdated(): void;
  onSendingRemoteMediaRequest(): void;
  onAdBreakStatusUpdated(): void;
}
export { RemoteMediaClientCallback };

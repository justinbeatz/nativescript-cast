import { CastButtonBase } from './common';
import { CastButton } from './index.android';
import { CastEvent } from './types';

@NativeClass()
// @ts-ignore
class MediaQueueDelegate extends NSObject implements GCKMediaQueueDelegate {
  public static ObjCProtocols = [GCKMediaQueueDelegate];
  public owner: CastButton;

  static new(): GCKMediaQueueDelegate {
    return <GCKMediaQueueDelegate>super.new();
  }

  mediaQueueDidReloadItems(queue: GCKMediaQueue): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.itemsReloaded,
      ios: this.owner.nativeView,
    });
  }

  didInsertItemsInRange(queue: GCKMediaQueue, range: NSRange): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.itemsInsertedInRange,
      insertIndex: range.location,
      insertCount: range.length,
      ios: this.owner.nativeView,
    });
  }

  didUpdateItemsAtIndexes(queue: GCKMediaQueue, indexes: number[]): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.itemsUpdatedAtIndexes,
      indexes: indexes,
      ios: this.owner.nativeView,
    });
  }

  didRemoveItemsAtIndexes(queue: GCKMediaQueue, indexes: number[]): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.itemsRemovedAtIndexes,
      indexes: indexes,
      ios: this.owner.nativeView,
    });
  }

  mediaQueueWillChange(queue: GCKMediaQueue): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.mediaQueueChanged,
      ios: this.owner.nativeView,
    });
  }

  mediaQueueDidChange(queue: GCKMediaQueue) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.mediaQueueWillChange,
      ios: this.owner.nativeView,
    });
  }
}

export { MediaQueueDelegate };

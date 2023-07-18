// import { NativescriptCastCommon } from './common';
import { View } from '@nativescript/core';

export { CastEvent, CastMediaInfo, CastMediaStatus, PlayerState, RepeatMode, StreamType, MetadataType } from './types';

export type Visibility = 'visible' | 'hidden' | 'collapse';

export declare abstract class CastButtonBase extends View {
  static validMetadataKeys: string[];
  static castEvent: string;
  visibility: Visibility;
  sendEvent(eventName: string, data?: any): void;
}

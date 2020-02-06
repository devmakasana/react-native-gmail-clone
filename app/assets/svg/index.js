import React from 'react';
import {G, Path, ClipPath, Defs, Rect, Circle} from 'react-native-svg';

export default {
  'short-menu': {
    svg: (
      <G width="20" height="14" fill="none">
        <Path
          d="M0 13.6667H20V11.4445H0V13.6667ZM0 8.11115H20V5.88893H0V8.11115ZM0 0.333374V2.5556H20V0.333374H0Z"
          fill="#707070"
        />
      </G>
    ),
    viewBox: '0 0 20 14',
  },
  'author-icon': {
    svg: (
      <G width={42} height={42} viewBox="0 0 42 42" fill="#707070">
        <Path
          d="M14.98 29V11.937h5.579c1.851 0 3.242.383 4.171 1.149.938.766 1.407 1.898 1.407 3.398a3.49 3.49 0 01-.68 2.121c-.453.61-1.07 1.082-1.852 1.418.922.258 1.649.75 2.18 1.477.54.719.809 1.578.809 2.578 0 1.531-.496 2.735-1.489 3.61-.992.875-2.394 1.312-4.207 1.312H14.98zm2.25-7.98v6.14h3.715c1.047 0 1.871-.27 2.473-.808.61-.547.914-1.297.914-2.25 0-2.055-1.117-3.082-3.352-3.082h-3.75zm0-1.805h3.399c.984 0 1.77-.246 2.355-.738.594-.493.891-1.16.891-2.004 0-.938-.273-1.617-.82-2.04-.547-.43-1.38-.644-2.496-.644H17.23v5.426z"
          fill="#fff"
        />
      </G>
    ),
    viewBox: '0 0 42 42',
  },
  'star-icon': {
    svg: (
      <G width="20" height="19" fill="none">
        <Path
          d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z"
          fill="#9AA0A6"
        />
      </G>
    ),
    viewBox: '0 0 20 20',
  },
  'star-icon-active': {
    svg: (
      <G width="20" height="19" fill="none">
        <Path
          d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z"
          fill="#9AA0A6"
        />
      </G>
    ),
    viewBox: '0 0 20 20',
  },
  'select-author': {
    svg: (
      <G width="19" height="14" fill="none">
        <Path
          d="M1 7.5L6 12.5L17.5 1"
          stroke="#ffffff"
          stroke-width="2"
          fill="rgba(0,0,0,0)"
        />
      </G>
    ),
    viewBox: '0 0 20 19',
  },
  'google-icon': {
    svg: (
      <G width={29} height={29} viewBox="0 0 29 29" fill="none">
        <Path
          d="M6.427 17.525l-1.01 3.768-3.689.078A14.435 14.435 0 010 14.5c0-2.405.585-4.672 1.621-6.669h.001l3.285.603 1.439 3.264A8.619 8.619 0 005.88 14.5c0 1.064.193 2.084.547 3.025z"
          fill="#FBBB00"
        />
        <Path
          d="M28.747 11.791c.166.877.253 1.783.253 2.709 0 1.038-.11 2.05-.317 3.027a14.497 14.497 0 01-5.105 8.28h-.001l-4.137-.212-.586-3.655a8.641 8.641 0 003.718-4.413H14.82v-5.736h13.928z"
          fill="#518EF8"
        />
        <Path
          d="M23.577 25.807A14.439 14.439 0 0114.5 29c-5.522 0-10.323-3.086-12.772-7.628l4.699-3.847a8.622 8.622 0 0012.427 4.416l4.723 3.866z"
          fill="#28B446"
        />
        <Path
          d="M23.755 3.338l-4.697 3.846a8.624 8.624 0 00-12.712 4.515L1.622 7.832C4.034 3.179 8.895 0 14.5 0a14.44 14.44 0 019.255 3.338z"
          fill="#F14336"
        />
      </G>
    ),
    viewBox: '0 0 29 29',
  },
  'add-account': {
    svg: (
      <G width={19} height={14} viewBox="0 0 19 14" fill="none">
        <Path
          stroke="#202124"
          strokeOpacity={0.85}
          strokeWidth={2}
          d="M15.623 2v7M19 5.5h-7"
        />
        <Path
          d="M7 1.663a1.837 1.837 0 110 3.674 1.837 1.837 0 010-3.674zm0 7.875c2.599 0 5.338 1.277 5.338 1.837v.963H1.662v-.963c0-.56 2.738-1.838 5.337-1.838zM7 0a3.499 3.499 0 00-3.5 3.5C3.5 5.434 5.066 7 7 7s3.5-1.566 3.5-3.5S8.934 0 7 0zm0 7.875c-2.336 0-7 1.172-7 3.5V14h14v-2.625c0-2.328-4.664-3.5-7-3.5z"
          fill="#202124"
          fillOpacity={0.85}
        />
      </G>
    ),
    viewBox: '0 0 19 14',
  },
  'manage-account': {
    svg: (
      <G width={19} height={16} viewBox="0 0 19 16" fill="none">
        <Path
          d="M7 1.663a1.837 1.837 0 110 3.674 1.837 1.837 0 010-3.674zm0 7.875h.152c2.553.05 5.186 1.288 5.186 1.837v.963H1.662v-.963c0-.56 2.738-1.838 5.337-1.838zM7 0a3.499 3.499 0 00-3.5 3.5C3.5 5.434 5.066 7 7 7s3.5-1.566 3.5-3.5S8.934 0 7 0zm0 7.875c-2.336 0-7 1.172-7 3.5V14h14v-2.625c0-2.107-3.824-3.268-6.281-3.469A8.908 8.908 0 007 7.875z"
          fill="#202124"
          fillOpacity={0.85}
        />
        <Path
          d="M19 10.5a5.5 5.5 0 11-11 0C8 7.462 11.5 5 13.5 5a5.5 5.5 0 015.5 5.5z"
          fill="#fff"
        />
        <Path
          d="M16.928 10.941c.018-.144.037-.288.037-.441 0-.153-.01-.297-.037-.441l.979-.747a.23.23 0 00.055-.288l-.924-1.557c-.055-.099-.175-.135-.286-.099l-1.145.45a3.182 3.182 0 00-.785-.441l-.176-1.188c-.009-.108-.11-.189-.221-.189h-1.847a.236.236 0 00-.231.189l-.176 1.188a3.716 3.716 0 00-.785.441l-1.145-.45a.245.245 0 00-.286.099L9.03 9.024a.219.219 0 00.056.288l.979.747a3.423 3.423 0 000 .882l-.98.747a.23.23 0 00-.055.288l.924 1.557c.055.099.175.135.286.099l1.145-.45c.24.18.499.333.785.441l.176 1.188c.018.108.11.189.23.189h1.848c.11 0 .212-.081.23-.189l.176-1.188c.277-.117.545-.261.776-.441l1.154.45c.102.036.222 0 .287-.099l.923-1.557a.23.23 0 00-.055-.288l-.988-.747zm-3.427.909c-.766 0-1.385-.603-1.385-1.35 0-.747.619-1.35 1.385-1.35.767 0 1.386.603 1.386 1.35 0 .747-.62 1.35-1.386 1.35z"
          fill="#202124"
          fillOpacity={0.85}
        />
      </G>
    ),
    viewBox: '0 0 19 16',
  },
  'compose-icon': {
    svg: (
      <G width="24" height="24" fill="none">
        <Rect
          x="10"
          y="10"
          width="4"
          height="10"
          transform="rotate(90 10 10)"
          fill="#FBBC05"
        />
        <Rect x="10" y="14" width="4" height="10" fill="#34A853" />
        <Path
          d="M24 14L10 14L10.4828 13.5L13.8621 10L24 10L24 10.5L24 10.6975L24 14Z"
          fill="#4285F4"
        />
        <Path
          d="M10 0V14L10.5 13.5172L14 10.1379V0H13.5H13.3025H10Z"
          fill="#EA4335"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'archive-icon': {
    svg: (
      <G width="19" height="19" fill="none">
        <Path d="M18.5144 2.35389L17.0472 0.580555C16.7622 0.221667 16.3294 0 15.8333 0H3.16667C2.67056 0 2.23778 0.221667 1.94222 0.580555L0.485556 2.35389C0.179444 2.71278 0 3.18778 0 3.69444V16.8889C0 18.05 0.95 19 2.11111 19H16.8889C18.05 19 19 18.05 19 16.8889V3.69444C19 3.18778 18.8206 2.71278 18.5144 2.35389ZM3.42 2.11111H15.58L16.435 3.135H2.57556L3.42 2.11111ZM2.11111 16.8889V5.27778H16.8889V16.8889H2.11111ZM11.0306 7.38889H7.96944V10.5556H5.27778L9.5 14.7778L13.7222 10.5556H11.0306V7.38889Z" />
      </G>
    ),
    viewBox: '0 0 19 19',
  },
  'attach-icon': {
    svg: (
      <G width={21} height={11} viewBox="0 0 21 11" fill="none">
        <Path
          d="M0 5.5C0 2.46 2.583 0 5.775 0H16.8C19.12 0 21 1.79 21 4s-1.88 4-4.2 4H6C4.551 8 3.5 6.88 3.5 5.5S4.551 3 6 3h10.5v2h-10c-.577 0-.577 1 0 1h10.3c1.155 0 2.1-.9 2.1-2s-.945-2-2.1-2H5.775C3.748 2 2.1 3.57 2.1 5.5S3.748 9 5.775 9H16.5v2H5.775C2.583 11 0 8.54 0 5.5z"
          fill="#5F6368"
        />
      </G>
    ),
    viewBox: '0 0 21 11',
  },
  'send-icon': {
    svg: (
      <G width={21} height={18} viewBox="0 0 21 18" fill="none">
        <Path
          d="M2.01 3.03L15.5 9h-4L2.01 6.5V3.03zM15.5 9L2 14.97l.01-3.47L11.5 9h4zM.01 0L0 7l.01 2L0 11l.01 7L21 9 .01 0z"
          fill="#5F6368"
        />
      </G>
    ),
    viewBox: '0 0 21 18',
  },
  'more-icon': {
    svg: (
      <G width={4} height={16} viewBox="0 0 4 16" fill="none">
        <Path
          d="M2 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          fill="#5F6368"
        />
      </G>
    ),
    viewBox: '0 0 4 16',
  },
  'dropdown-icon': {
    svg: (
      <G width={12} height={8} viewBox="0 0 12 8" fill="none">
        <Path
          d="M1.41.59L6 5.17 10.59.59 12 2 6 8 0 2 1.41.59z"
          fill="#757575"
        />
      </G>
    ),
    viewBox: '0 0 12 8',
  },
  'allinboxes-icon': {
    svg: (
      <G width={25} height={25} viewBox="0 0 25 25" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.99 2H22a2 2 0 012 2v14c0 1.1-.9 2-2 2H7.99C6.88 20 6 19.1 6 18l.01-14c0-1.11.87-2 1.98-2zM18 14h4V4H7.99v10H12c0 1.66 1.35 3 3 3s3-1.34 3-3zM2 8v13.5a2 2 0 002 2h14v-2H4V8H2z"
          fill="#3C4043"
        />
      </G>
    ),
    viewBox: '0 0 25 25',
  },
  'primary-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"
          // fill="#3C4043"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'social-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 010 7.52c.42.14.86.24 1.33.24zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z"
          fill="#3C4043"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'promotions-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 1a1 1 0 00-1 1v10a1 1 0 00.293.707l8.59 8.58a2.999 2.999 0 004.244 0l7.17-7.17-.707-.707.71.705a3 3 0 000-4.23l-.003-.002-8.59-8.59A1 1 0 0012 1H2zm17.882 11.704l-.001.001-7.168 7.168a1 1 0 01-1.415 0h-.001L3 11.584V3h8.586l8.295 8.295a1 1 0 010 1.41zM7 5a2 2 0 100 4h.01a2 2 0 100-4H7z"
          fill="#202124"
          fillOpacity={0.85}
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'starred-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
          fill="#3C4043"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'snoozed-icon': {
    svg: (
      <G width={25} height={25} viewBox="0 0 25 25" fill="none">
        <Path
          d="M12.49 2.083C6.74 2.083 2.083 6.75 2.083 12.5S6.74 22.917 12.49 22.917c5.76 0 10.427-4.667 10.427-10.417S18.25 2.083 12.49 2.083zm.01 18.75A8.331 8.331 0 014.167 12.5 8.331 8.331 0 0112.5 4.167a8.331 8.331 0 018.333 8.333 8.331 8.331 0 01-8.333 8.333z"
          fill="#3C4043"
        />
        <Path
          d="M13.02 7.292h-1.562v6.25l5.47 3.28.78-1.28-4.687-2.782V7.292z"
          fill="#3C4043"
        />
      </G>
    ),
    viewBox: '0 0 25 25',
  },
  'important-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          d="M5.408 17.992l3.754-5.423.394-.569-.394-.57-3.754-5.422L14.5 6s0 0 0 0c.338 0 .636.166.813.417l.001.002L19.274 12l-3.96 5.581-.001.002a.994.994 0 01-.812.417H14.5l-9.092-.008z"
          fill="none"
          stroke="#3C4043"
          strokeWidth={2}
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'sent-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          d="M4.01 6.03L17.5 12h-4L4.01 9.5V6.03zM17.5 12L4 17.97l.01-3.47L13.5 12h4zM2.01 3L2 10l.01 2L2 14l.01 7L23 12 2.01 3z"
          fill="#3C4043"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'scheduled-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          d="M3.01 5.03l9.246 4.092-.756.378-.637.786L3.01 8.5V5.03zm7.853 5.256l-.656.923s-.488.765-.707 1.291c-.31.745-.454 1.796-.454 1.796L3 16.97l.01-3.47 6.709-1.526s.144-.258.488-.765c.223-.33.656-.923.656-.923zM1.01 2L1 9l.01 2L1 13l.01 7 8.12-3.482s-.143-2.301.196-3.518c.338-1.217 1.537-2.714 1.537-2.714L11.5 9.5l.756-.378s.738-.424 1.244-.622c.778-.304 1.643-.44 1.643-.44L1.01 2zM16.988 11.54H15v4.252L18.55 18l1-1.5-2.5-1.5-.063-3.46z"
          fill="#202124"
          fillOpacity={0.85}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.085 22.17a7.085 7.085 0 100-14.17 7.085 7.085 0 000 14.17zm0-2.362a4.723 4.723 0 100-9.446 4.723 4.723 0 000 9.446z"
          fill="#202124"
          fillOpacity={0.85}
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'outbox-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Rect
          x="4"
          y="4"
          width="17"
          height="16"
          rx="1"
          fill="none"
          stroke="#3C4043"
          strokeWidth="2"
        />
        <Path
          d="M8 8.5l6.5 3.5H11l-3-1.5v-2zm6.5 3.5L8 15.5v-2.167L11 12h3.5zM6.34 6l-.007 4.667L6.34 12l-.007 1.333L6.34 18l12.16-6L6.34 6z"
          fill="#3C4043"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'drafts-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 2a2 2 0 00-2 2v17a2 2 0 002 2h13a2 2 0 002-2V10l-8-8H5zm7 2H5v17h13V10h-6V4z"
          fill="#202124"
          fillOpacity={0.85}
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'allmail-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.833 3H21.5c1.008 0 1.833.825 1.833 1.833v11a1.839 1.839 0 01-1.833 1.834H6.833A1.839 1.839 0 015 15.833l.01-11A1.83 1.83 0 016.832 3zm7.334 8.25L6.833 6.667v9.166H21.5V6.667l-7.333 4.583zM6.833 4.833l7.334 4.584L21.5 4.833H6.833zM1 5v14.5a2 2 0 002 2h14.5v-2H3V5H1z"
          fill="#202124"
          fillOpacity={0.85}
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'spam-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.176 3.293A1 1 0 018.883 3h6.9a1 1 0 01.707.293l4.884 4.883a1 1 0 01.293.707v6.9a1 1 0 01-.293.707l-4.884 4.884a1 1 0 01-.707.293h-6.9a1 1 0 01-.707-.293L3.293 16.49A1 1 0 013 15.783v-6.9a1 1 0 01.293-.707l4.883-4.883zM9.298 5L5 9.298v6.071l4.298 4.298h6.071l4.298-4.298V9.298L15.369 5H9.298zm2.035 9.333v-7h2v7h-2zm1 1a1 1 0 100 2h.01a1 1 0 000-2h-.01z"
          fill="#202124"
          fillOpacity={0.85}
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'bin-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 3v1H4v2h1v13.5a2 2 0 002 2h11a2 2 0 002-2V6h.5V4h-5V3h-6zM7 6h11v13.5H7V6zm2.5 11.5V8h2v9.5h-2zm4-9.5v9.5h2V8h-2z"
          fill="#202124"
          fillOpacity={0.85}
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'calendar-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          d="M20.1 3.91h-.95V2h-1.9v1.91h-9.5V2h-1.9v1.91H4.9c-1.045 0-1.9.858-1.9 1.908v15.273C3 22.14 3.855 23 4.9 23h15.2c1.045 0 1.9-.86 1.9-1.91V5.819a1.91 1.91 0 00-1.9-1.909zm0 17.18H4.9V8.683h15.2V21.09z"
          fill="#3C4043"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'contacts-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 11.5C23 17.299 18.299 22 12.5 22S2 17.299 2 11.5 6.701 1 12.5 1 23 5.701 23 11.5zm-3.63 5.006a8.5 8.5 0 10-13.544.258 10.018 10.018 0 0113.322-.442l.222.184zm-1.363 1.469l-.14-.117a8.018 8.018 0 00-10.626.32A8.464 8.464 0 0012.5 20a8.467 8.467 0 005.508-2.025zM16 8.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM12.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          fill="#202124"
          fillOpacity={0.85}
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'settings-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          d="M12.5 8.3c1.145 0 2.243.442 3.053 1.23a4.143 4.143 0 011.264 2.97 4.143 4.143 0 01-1.264 2.97A4.378 4.378 0 0112.5 16.7a4.378 4.378 0 01-3.052-1.23 4.143 4.143 0 01-1.265-2.97c0-1.114.455-2.182 1.265-2.97A4.379 4.379 0 0112.5 8.3zM10.342 23a.542.542 0 01-.54-.441l-.4-2.783c-.68-.262-1.262-.619-1.823-1.039l-2.687 1.06c-.238.084-.53 0-.659-.23l-2.158-3.633a.508.508 0 01.13-.672l2.276-1.744-.075-1.018.075-1.05-2.277-1.711a.508.508 0 01-.13-.673l2.16-3.633c.129-.23.42-.325.658-.23l2.687 1.05c.561-.41 1.144-.767 1.824-1.03l.399-2.782a.542.542 0 01.54-.441h4.316c.27 0 .497.189.54.441l.4 2.782c.68.263 1.262.62 1.823 1.03l2.687-1.05a.538.538 0 01.659.23l2.158 3.633a.508.508 0 01-.13.672l-2.277 1.712.076 1.05-.076 1.05 2.278 1.711c.205.158.27.442.13.673l-2.16 3.633c-.129.23-.42.325-.658.23l-2.687-1.05c-.561.41-1.144.767-1.824 1.03l-.399 2.782a.541.541 0 01-.54.441h-4.316zM11.69 4.1l-.4 2.74a5.963 5.963 0 00-3.27 1.87l-2.6-1.093-.81 1.365 2.277 1.628a5.678 5.678 0 000 3.78L4.6 16.028l.81 1.365 2.622-1.092a5.911 5.911 0 003.248 1.848l.4 2.751h1.64l.4-2.74a5.99 5.99 0 003.248-1.859l2.622 1.092.81-1.365-2.288-1.627a5.709 5.709 0 000-3.791l2.277-1.627-.81-1.366-2.6 1.093a5.885 5.885 0 00-3.27-1.859l-.4-2.751h-1.618z"
          fill="#3C4043"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'help-icon': {
    svg: (
      <G width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          d="M11.45 18.8h2.1v-2.1h-2.1v2.1zM12.5 2C6.704 2 2 6.704 2 12.5S6.704 23 12.5 23 23 18.296 23 12.5 18.296 2 12.5 2zm0 18.9c-4.63 0-8.4-3.77-8.4-8.4 0-4.63 3.77-8.4 8.4-8.4 4.63 0 8.4 3.77 8.4 8.4 0 4.63-3.77 8.4-8.4 8.4zm0-14.7c-2.32 0-4.2 1.88-4.2 4.2h2.1c0-1.155.945-2.1 2.1-2.1 1.155 0 2.1.945 2.1 2.1 0 2.1-3.15 1.838-3.15 5.25h2.1c0-2.363 3.15-2.625 3.15-5.25 0-2.32-1.88-4.2-4.2-4.2z"
          fill="#3C4043"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'Gmail-icon': {
    svg: (
      <G width={54} height={17} viewBox="0 0 54 17" fill="none">
        <Path
          d="M8.736 16.336a7.684 7.684 0 01-3.906-1.029 7.651 7.651 0 01-2.835-2.835c-.7-1.204-1.05-2.534-1.05-3.99 0-1.456.35-2.786 1.05-3.99A7.651 7.651 0 014.83 1.657 7.684 7.684 0 018.736.628c1.106 0 2.142.196 3.108.588.98.392 1.785.945 2.415 1.659l-1.281 1.281a4.546 4.546 0 00-1.827-1.344 5.948 5.948 0 00-2.394-.483 6 6 0 00-2.982.777c-.91.504-1.645 1.225-2.205 2.163-.546.924-.819 1.995-.819 3.213s.273 2.296.819 3.234a5.996 5.996 0 002.226 2.163 6.09 6.09 0 002.961.756c1.008 0 1.848-.154 2.52-.462a5.779 5.779 0 001.764-1.26c.364-.392.658-.861.882-1.407.224-.56.364-1.176.42-1.848H8.778V7.999h7.224c.07.392.105.756.105 1.092 0 .924-.147 1.827-.441 2.709a5.972 5.972 0 01-1.407 2.289c-1.386 1.498-3.227 2.247-5.523 2.247zM18.203 5.29h1.701v1.575h.084c.308-.546.77-1.001 1.386-1.365a3.78 3.78 0 011.953-.546c.784 0 1.463.189 2.037.567a3.157 3.157 0 011.26 1.512 4.404 4.404 0 011.491-1.512c.63-.378 1.358-.567 2.184-.567 1.232 0 2.156.378 2.772 1.134.63.742.945 1.757.945 3.045V16h-1.764V9.406c0-.994-.203-1.715-.609-2.163-.406-.448-1.008-.672-1.806-.672-.532 0-1.015.154-1.449.462a3.204 3.204 0 00-1.029 1.239 3.975 3.975 0 00-.357 1.68V16h-1.785V9.427c0-1.008-.203-1.736-.609-2.184-.406-.448-1-.672-1.785-.672-.532 0-1.015.161-1.449.483a3.172 3.172 0 00-1.029 1.26 3.975 3.975 0 00-.357 1.68V16h-1.785V5.29zm21.493 11.046c-.784 0-1.484-.154-2.1-.462-.616-.308-1.092-.728-1.428-1.26a3.455 3.455 0 01-.504-1.848c0-1.134.427-2.016 1.281-2.646.854-.644 1.932-.966 3.234-.966.644 0 1.239.07 1.785.21.56.14.987.301 1.281.483v-.651c0-.798-.28-1.435-.84-1.911-.56-.49-1.267-.735-2.121-.735a3.5 3.5 0 00-1.659.399 2.956 2.956 0 00-1.197 1.071l-1.344-1.008A4.309 4.309 0 0137.806 5.5c.742-.364 1.561-.546 2.457-.546 1.456 0 2.597.385 3.423 1.155.84.756 1.26 1.792 1.26 3.108V16h-1.701v-1.533h-.084c-.308.518-.77.959-1.386 1.323-.616.364-1.309.546-2.079.546zm.168-1.575a3.23 3.23 0 001.68-.462 3.502 3.502 0 001.239-1.239 3.267 3.267 0 00.462-1.701 4.408 4.408 0 00-1.239-.546 5.63 5.63 0 00-1.554-.21c-.98 0-1.722.203-2.226.609-.49.406-.735.931-.735 1.575 0 .588.224 1.064.672 1.428.448.364 1.015.546 1.701.546zm8.412-11.445c-.35 0-.65-.126-.903-.378a1.232 1.232 0 01-.378-.903c0-.35.126-.644.378-.882.252-.252.553-.378.903-.378s.651.126.903.378c.252.238.378.532.378.882s-.126.651-.378.903a1.189 1.189 0 01-.903.378zm-.882 1.974h1.764V16h-1.764V5.29zM51.761.964h1.785V16h-1.785V.964z"
          fill="#D93025"
        />
      </G>
    ),
    viewBox: '0 0 54 17',
  },
  'attached-image-icon': {
    svg: (
      <G width={14} height={14} viewBox="0 0 14 14" fill="none">
        <Path
          d="M12.25 0H1.75A1.75 1.75 0 000 1.75v10.5C0 13.217.783 14 1.75 14h10.5A1.75 1.75 0 0014 12.25V1.75A1.75 1.75 0 0012.25 0zM1.75 12l2.625-3.25 1.776 2.371L8.75 7l3.5 5H1.75z"
          fill="#DB4437"
        />
      </G>
    ),
    viewBox: '0 0 14 14',
  },
  'attached-pdf-icon': {
    svg: (
      <G width={14} height={14} viewBox="0 0 14 14" fill="none">
        <Rect width={14} height={14} rx={1.7} fill="#DB4437" />
        <Path
          d="M3.044 5H1.5v4.72h1.041V8.157h.503a1.58 1.58 0 001.579-1.58A1.58 1.58 0 003.044 5zm0 2.117h-.503V6.04h.503a.538.538 0 010 1.076zM6.705 5h-1.04v4.72h1.04a2.084 2.084 0 002.082-2.083v-.555A2.084 2.084 0 006.705 5zm1.041 2.637c0 .574-.467 1.041-1.04 1.041V6.041c.573 0 1.04.467 1.04 1.041v.555zM12.5 6.041V5H9.897v4.72h1.041V8.28h1.041V7.237h-1.04V6.041H12.5z"
          fill="#fff"
        />
      </G>
    ),
    viewBox: '0 0 14 14',
  },
  'attached-document-icon': {
    svg: (
      <G width={12} height={14} viewBox="0 0 12 14" fill="none">
        <Path
          d="M1.3 0h4.833L11.5 5.158V12.7a1.3 1.3 0 01-1.3 1.3H1.3A1.3 1.3 0 010 12.7V1.3A1.3 1.3 0 011.3 0z"
          fill="#4986E7"
        />
        <Path d="M9.5 5.52l-4-4.02v4.02h4z" fill="#fff" />
      </G>
    ),
    viewBox: '0 0 12 14',
  },
  'checked-icon': {
    svg: (
      <G width={20} height={20} viewBox="0 0 20 20" fill="none">
        <Rect width={20} height={20} rx={3} fill="#1A73E8" />
        <G clipPath="url(#prefix__clip0)">
          <Path
            d="M2 10.51L7.48 16 18 5.49 16.49 4l-9.01 9-3.99-3.99L2 10.51z"
            fill="#fff"
          />
        </G>
        <Defs>
          <ClipPath id="prefix__clip0">
            <Path fill="#fff" d="M2 2h16v16H2z" />
          </ClipPath>
        </Defs>
      </G>
    ),
    viewBox: '0 0 20 20',
  },
  'unchecked-icon': {
    svg: (
      <G width={20} height={20} viewBox="0 0 20 20" fill="none">
        <Rect
          x={1}
          y={1}
          width={18}
          height={18}
          rx={2}
          stroke="#5F6368"
          strokeWidth={2}
        />
      </G>
    ),
    viewBox: '0 0 20 20',
  },
};

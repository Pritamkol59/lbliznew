import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import normalize from 'react-native-normalize';
import Video from 'react-native-video';

const VideoPlayer = ({ videoUri }) => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setPaused(false); // Automatically start the video when the component mounts
  }, []);

  const handlePlayPause = () => {
    setPaused(!paused);
  };

  const handleMuteUnmute = () => {
    setMuted(!muted);
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: videoUri }}
        style={styles.videoPlayer}
        controls={false}
        paused={paused}
        muted={muted}
        resizeMode="contain"
      />
      <View style={styles.controlBar}>
        <TouchableOpacity onPress={handlePlayPause} style={styles.controlButton}>
          <Text style={styles.controlButtonText}>{paused ? 'Play' : 'Pause'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMuteUnmute} style={styles.controlButton}>
          <Text style={styles.controlButtonText}>{muted ? 'Unmute' : 'Mute'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:normalize(150),
    width:'100%',
    alignSelf:'center',
    
  },
  videoPlayer: {
    flex: 1,
  },
  controlBar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  controlButton: {
    marginHorizontal: 20,
  },
  controlButtonText: {
    color: '#FFF',
    fontSize: 20,
  },
});

export default VideoPlayer;

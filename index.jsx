import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Search, Home, Heart } from 'lucide-react';

const YTMusicClone = () => {
  // Simple state management
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [searchText, setSearchText] = useState('');

  // Sample music data
  const songs = [
    {
      title: "Neon Dreams",
      artist: "Electric Horizon",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop"
    },
    {
      title: "Midnight City",
      artist: "Neon Pulse", 
      image: "https://images.unsplash.com/photo-1571974599782-87624638275b?w=150&h=150&fit=crop"
    },
    {
      title: "Solar Flare",
      artist: "Cosmic Echo",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop"
    }
  ];

  // Simple functions
  const playPause = () => setIsPlaying(!isPlaying);
  const nextSong = () => setCurrentSong((currentSong + 1) % songs.length);
  const prevSong = () => setCurrentSong(currentSong === 0 ? songs.length - 1 : currentSong - 1);
  const selectSong = (index) => setCurrentSong(index);

  // Filter songs based on search
  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(searchText.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Header */}
      <div className="bg-gray-900 p-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-red-500 text-2xl font-bold">YT Music</h1>
          
          {/* Search Bar */}
          <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-96">
            <Search size={20} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search songs..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="bg-transparent outline-none flex-1"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Home size={24} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-lg p-12 mb-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Your Music</h2>
          <p className="text-xl">Listen to your favorite songs</p>
        </div>

        {/* Song List */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-6">Songs</h3>
          
          {filteredSongs.map((song, index) => (
            <div
              key={index}
              onClick={() => selectSong(songs.indexOf(song))}
              className={`flex items-center p-4 rounded-lg hover:bg-gray-800 cursor-pointer ${
                currentSong === songs.indexOf(song) ? 'bg-gray-800' : ''
              }`}
            >
              {/* Song Image */}
              <img
                src={song.image}
                alt={song.title}
                className="w-16 h-16 rounded-lg mr-4"
              />
              
              {/* Song Info */}
              <div className="flex-1">
                <h4 className="font-semibold text-lg">{song.title}</h4>
                <p className="text-gray-400">{song.artist}</p>
              </div>
              
              {/* Like Button */}
              <Heart size={20} className="text-gray-400 hover:text-red-500 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4">
        <div className="max-w-6xl mx-auto flex items-center">
          
          {/* Current Song Info */}
          <div className="flex items-center space-x-4 flex-1">
            <img
              src={songs[currentSong].image}
              alt={songs[currentSong].title}
              className="w-14 h-14 rounded-lg"
            />
            <div>
              <h4 className="font-semibold">{songs[currentSong].title}</h4>
              <p className="text-gray-400 text-sm">{songs[currentSong].artist}</p>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center space-x-6 flex-1 justify-center">
            <button onClick={prevSong} className="hover:text-white">
              <SkipBack size={24} />
            </button>
            
            <button
              onClick={playPause}
              className="bg-white text-black p-3 rounded-full hover:scale-105"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            
            <button onClick={nextSong} className="hover:text-white">
              <SkipForward size={24} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex-1 flex justify-end">
            <div className="w-32 bg-gray-600 h-1 rounded-full">
              <div className="bg-red-500 h-1 rounded-full w-1/3"></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default YTMusicClone;

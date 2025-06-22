"use client";

import React, { useState, useEffect } from 'react';
import { BookOpen, User, MapPin, ExternalLink, Calendar, MessageCircle, Heart, CheckCircle, Star, TrendingUp, Users } from 'lucide-react'; // Added new icons

const PublicProfile = () => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);

  useEffect(() => {
    // Simulate API call to fetch profile data
    setTimeout(() => {
      setProfile({
        id: "123",
        username: "محب_الكتب88",
        fullName: "أميرة ب.",
        bio: "📚 قارئة نهمة، أعشق القهوة، وأبحث دائمًا عن كنوز أدبية مخفية. أحب الروايات التاريخية والتشويق والسير الذاتية.",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
        coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&h=400&fit=crop",
        location: "الجزائر العاصمة، الجزائر",
        website: "https://myreadingnook.com",
        joinedDate: "2022-09-12",
        followersCount: 980,
        followingCount: 314,
        reviewsCount: 27,
        bookshelfCount: 53,
        isOwnProfile: false, // Set to true to test own profile view

        // --- NEW SIMULATED DATA FOR NEW SECTIONS ---
        recentActivity: [
          { type: 'review', bookTitle: 'فن اللامبالاة', bookAuthor: 'مارك مانسون', rating: 4, reviewId: 'rev1', timestamp: '2025-06-20T10:00:00Z' },
          { type: 'added_to_shelf', bookTitle: 'المائة عام من العزلة', bookAuthor: 'غابرييل غارسيا ماركيز', shelf: 'أريد أن أقرأ', timestamp: '2025-06-18T14:30:00Z' },
          { type: 'finished_book', bookTitle: 'الخيميائي', bookAuthor: 'باولو كويلو', timestamp: '2025-06-15T09:00:00Z' },
          { type: 'rated_book', bookTitle: 'الجريمة والعقاب', bookAuthor: 'فيودور دوستويفسكي', rating: 5, timestamp: '2025-06-10T11:00:00Z' },
          { type: 'followed', followerName: 'علي ك.', followerAvatar: 'https://randomuser.me/api/portraits/men/32.jpg', timestamp: '2025-06-08T18:00:00Z' },
        ],
        favoriteBooks: [
          { id: 'fav1', title: 'البؤساء', author: 'فيكتور هوغو', cover: 'https://images-na.ssl-images-amazon.com/images/I/41K-lEw34PL._SX322_BO1,204,203,200_.jpg' },
          { id: 'fav2', title: 'عمارة يعقوبيان', author: 'علاء الأسواني', cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360057037l/17282583.jpg' },
          { id: 'fav3', title: '1984', author: 'جورج أورويل', cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427.jpg' },
        ],
        readingStats: {
          booksReadThisYear: 12,
          pagesReadThisYear: 3500,
          favoriteGenre: 'الروايات التاريخية',
          averageRating: 4.2,
        },
        featuredFollowers: [
          { id: 'f1', username: 'قارئة_شغوفة', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
          { id: 'f2', username: 'عشاق_الأدب', avatar: 'https://randomuser.me/api/portraits/men/78.jpg' },
          { id: 'f3', username: 'نور_القراءات', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' },
        ],
        // --- END NEW SIMULATED DATA ---
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleFollowToggle = async () => {
    if (!profile) return;
    setFollowLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      const newFollowStatus = !isFollowing;
      setIsFollowing(newFollowStatus);
      setProfile(prev => ({
        ...prev,
        followersCount: newFollowStatus ? prev.followersCount + 1 : prev.followersCount - 1
      }));
    } catch (error) {
      console.error('خطأ في المتابعة:', error);
      // Revert if error
    } finally {
      setFollowLoading(false);
    }
  };

  const handleMessage = () => {
    console.log('الانتقال إلى المراسلة');
    // Implement actual navigation to message page/modal
  };

  const timeSince = (dateString) => {
    const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " سنة";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " شهر";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " يوم";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " ساعة";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " دقيقة";
    return Math.floor(seconds) + " ثانية";
  };


  if (isLoading) {
    return (
      <div dir="rtl" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div dir="rtl" className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">الملف الشخصي غير موجود</h1>
          <p className="text-gray-600 mb-6">عذرًا، لم نتمكن من العثور على هذا القارئ.</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            العودة إلى الصفحة الرئيسية
          </button>
        </div>
      </div>
    );
  }

  // Helper function to format count
  const formatCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'ألف';
    }
    return count;
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-100 font-sans antialiased">
      {/* Cover Section */}
      <div className="relative h-48 md:h-64 bg-gray-200 overflow-hidden rounded-b-3xl shadow-md">
        {profile.coverImage && (
          <img
            src={profile.coverImage}
            alt="صورة الغلاف"
            className="w-full h-full object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-24 relative z-10">
        {/* Profile Header (Avatar, Name, Buttons) */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6">
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white flex-shrink-0">
            <img src={profile.avatar} alt={profile.fullName} className="w-full h-full object-cover" />
          </div>

          <div className="flex-1 mt-6 sm:mt-0 sm:ml-6 flex flex-col sm:flex-row sm:justify-end items-start sm:items-center gap-3">
            {profile.isOwnProfile ? (
                 <button
                 className="px-6 py-2.5 bg-gray-200 text-gray-800 rounded-md font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center min-w-[120px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
               >
                 <User className="w-4 h-4 ml-2" />
                 تعديل الملف الشخصي
               </button>
            ) : (
              <>
                <button
                  onClick={handleFollowToggle}
                  disabled={followLoading}
                  className={`
                    px-6 py-2.5 rounded-md font-semibold text-white transition-all duration-200 ease-in-out flex items-center justify-center min-w-[120px]
                    ${isFollowing
                      ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                      : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                    }
                    ${followLoading ? 'opacity-70 cursor-not-allowed' : ''}
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                  `}
                >
                  {followLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      جارٍ التحميل...
                    </span>
                  ) : (
                    isFollowing ? (
                        <span className="flex items-center">
                          <CheckCircle className="w-4 h-4 ml-2" /> متابع
                        </span>
                    ) : (
                        <span className="flex items-center">
                            <Heart className="w-4 h-4 ml-2" /> تابع
                        </span>
                    )
                  )}
                </button>
                <button
                  onClick={handleMessage}
                  className="px-6 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700 font-semibold flex items-center justify-center min-w-[120px] transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                >
                  <MessageCircle className="w-4 h-4 ml-2" />
                  رسالة
                </button>
              </>
            )}
          </div>
        </div>

        {/* User Info Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 transform hover:scale-[1.005] transition-transform duration-200 ease-out">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">{profile.fullName}</h1>
          <p className="text-lg text-gray-600 mt-1">@{profile.username}</p>
          <p className="mt-5 text-gray-700 leading-relaxed text-base">{profile.bio}</p>

          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-600">
            {profile.location && (
              <div className="flex items-center">
                <MapPin className="w-4 h-4 ml-2 text-gray-500" />
                <span>{profile.location}</span>
              </div>
            )}

            {profile.website && (
              <div className="flex items-center">
                <ExternalLink className="w-4 h-4 ml-2 text-gray-500" />
                <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-700 transition-colors">
                  {profile.website.replace(/^https?:\/\//, '')}
                </a>
              </div>
            )}

            <div className="flex items-center">
              <Calendar className="w-4 h-4 ml-2 text-gray-500" />
              <span>انضم في {new Date(profile.joinedDate).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long' })}</span>
            </div>
          </div>

          {/* Statistics Section (Counts) */}
          <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-y-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{formatCount(profile.reviewsCount)}</div>
              <div className="text-sm text-gray-600 mt-1">المراجعات</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{formatCount(profile.bookshelfCount)}</div>
              <div className="text-sm text-gray-600 mt-1">المكتبة</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{formatCount(profile.followersCount)}</div>
              <div className="text-sm text-gray-600 mt-1">المتابعون</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{formatCount(profile.followingCount)}</div>
              <div className="text-sm text-gray-600 mt-1">يتابع</div>
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: Recent Activity --- */}
        {profile.recentActivity && profile.recentActivity.length > 0 && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transform hover:scale-[1.005] transition-transform duration-200 ease-out">
            <div className="px-6 py-5 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">النشاط الأخير</h2>
              <a href="#" className="text-blue-600 text-sm hover:underline">عرض الكل</a>
            </div>
            <div className="p-6">
              <ul className="divide-y divide-gray-100">
                {profile.recentActivity.map((activity, index) => (
                  <li key={index} className="py-4 flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 ml-4">
                      {activity.type === 'review' && <Star className="w-4 h-4" />}
                      {activity.type === 'added_to_shelf' && <BookOpen className="w-4 h-4" />}
                      {activity.type === 'finished_book' && <CheckCircle className="w-4 h-4" />}
                      {activity.type === 'rated_book' && <Star className="w-4 h-4" />}
                      {activity.type === 'followed' && <Users className="w-4 h-4" />}
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-800 font-medium">
                        {activity.type === 'review' && (
                          <>
                            راجع كتاب "<span className="text-blue-600 hover:underline cursor-pointer">{activity.bookTitle}</span>"
                            لـ {activity.bookAuthor} وقيمه بـ {activity.rating} نجوم.
                          </>
                        )}
                        {activity.type === 'added_to_shelf' && (
                          <>
                            أضاف كتاب "<span className="text-blue-600 hover:underline cursor-pointer">{activity.bookTitle}</span>"
                            لـ {activity.bookAuthor} إلى رف "<span className="font-semibold">{activity.shelf}</span>".
                          </>
                        )}
                        {activity.type === 'finished_book' && (
                          <>
                            أنهى قراءة كتاب "<span className="text-blue-600 hover:underline cursor-pointer">{activity.bookTitle}</span>"
                            لـ {activity.bookAuthor}.
                          </>
                        )}
                        {activity.type === 'rated_book' && (
                          <>
                            قيّم كتاب "<span className="text-blue-600 hover:underline cursor-pointer">{activity.bookTitle}</span>"
                            لـ {activity.bookAuthor} بـ {activity.rating} نجوم.
                          </>
                        )}
                        {activity.type === 'followed' && (
                          <>
                            تابع <span className="text-blue-600 hover:underline cursor-pointer">@{activity.followerName}</span>.
                          </>
                        )}
                      </p>
                      <span className="text-sm text-gray-500 mt-1 block">{timeSince(activity.timestamp)} مضت</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* --- NEW SECTION: Favorite Books --- */}
        {profile.favoriteBooks && profile.favoriteBooks.length > 0 && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transform hover:scale-[1.005] transition-transform duration-200 ease-out">
            <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
              <h2 className="text-xl font-bold text-gray-800">الكتب المفضلة</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {profile.favoriteBooks.map(book => (
                  <div key={book.id} className="flex flex-col items-center text-center">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-24 h-36 object-cover rounded-md shadow-md mb-2 cursor-pointer hover:shadow-lg transition-shadow duration-200"
                    />
                    <h4 className="text-sm font-semibold text-gray-800">{book.title}</h4>
                    <p className="text-xs text-gray-600">{book.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- NEW SECTION: Reading Statistics --- */}
        {profile.readingStats && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-200 transform hover:scale-[1.005] transition-transform duration-200 ease-out">
            <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
              <h2 className="text-xl font-bold text-gray-800">إحصائيات القراءة</h2>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 text-blue-500 ml-3 flex-shrink-0" />
                <div>
                  <div className="text-lg font-semibold text-gray-900">{profile.readingStats.booksReadThisYear} كتاب</div>
                  <p className="text-sm text-gray-600">تمت قراءتها هذا العام</p>
                </div>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-6 h-6 text-green-500 ml-3 flex-shrink-0" />
                <div>
                  <div className="text-lg font-semibold text-gray-900">{formatCount(profile.readingStats.pagesReadThisYear)} صفحة</div>
                  <p className="text-sm text-gray-600">إجمالي الصفحات المقروءة</p>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 text-yellow-500 ml-3 flex-shrink-0" />
                <div>
                  <div className="text-lg font-semibold text-gray-900">المتوسط: {profile.readingStats.averageRating.toFixed(1)} نجوم</div>
                  <p className="text-sm text-gray-600">متوسط التقييمات</p>
                </div>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 text-purple-500 ml-3 flex-shrink-0" />
                <div>
                  <div className="text-lg font-semibold text-gray-900">{profile.readingStats.favoriteGenre}</div>
                  <p className="text-sm text-gray-600">النوع المفضل</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- NEW SECTION: Featured Followers (or Users I Follow) --- */}
        {profile.featuredFollowers && profile.featuredFollowers.length > 0 && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transform hover:scale-[1.005] transition-transform duration-200 ease-out">
            <div className="px-6 py-5 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">متابعون مميزون</h2>
              <a href="#" className="text-blue-600 text-sm hover:underline">عرض الكل</a>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {profile.featuredFollowers.map(follower => (
                  <div key={follower.id} className="text-center">
                    <img
                      src={follower.avatar}
                      alt={follower.username}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 hover:border-blue-500 transition-colors duration-200 cursor-pointer mx-auto mb-1"
                    />
                    <p className="text-sm text-gray-700">@{follower.username}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Original Reviews Section (now just a placeholder/empty state if activity is separate) */}
        {profile.recentActivity && profile.recentActivity.length === 0 && (
            <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">مراجعات الكتب</h2>
                </div>
                <div className="p-6">
                    <div className="text-center py-12">
                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <BookOpen className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">لا توجد مراجعات بعد</h3>
                        <p className="text-gray-600 max-w-sm">عندما يشارك {profile.fullName} مراجعة، ستظهر هنا لمجتمع القراء.</p>
                    </div>
                </div>
            </div>
        )}

        {/* Optional: Add some bottom padding to ensure content isn't flush with the bottom */}
        <div className="pb-12"></div>
      </div>
    </div>
  );
};

export default PublicProfile;
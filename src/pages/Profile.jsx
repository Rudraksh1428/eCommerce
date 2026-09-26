import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Package,
  Heart,
  ShoppingCart,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Your Name",
    email: "your@email.com",
    phone: "+91 XXXXX XXXXX",
    address: "Your Address",
  });

  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setFormData(profile);
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your account and view your orders
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-1 bg-white border border-gray-200 rounded-2xl p-6">

            <div className="flex flex-col items-center text-center">

              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                <User size={42} className="text-gray-500" />
              </div>

              <h2 className="text-xl font-bold text-gray-900 mt-4">
                {profile.name}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {profile.email}
              </p>

            </div>

            <div className="border-t border-gray-200 my-6"></div>

            <div className="space-y-4">

              <Link
                to="/orders"
                className="flex items-center gap-3 text-gray-700 hover:text-black transition"
              >
                <Package size={20} />
                <span>My Orders</span>
              </Link>

              <Link
                to="/wishlist"
                className="flex items-center gap-3 text-gray-700 hover:text-red-500 transition"
              >
                <Heart size={20} />
                <span>Wishlist</span>
              </Link>

              <Link
                to="/cart"
                className="flex items-center gap-3 text-gray-700 hover:text-black transition"
              >
                <ShoppingCart size={20} />
                <span>My Cart</span>
              </Link>

            </div>

          </div>

          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white border border-gray-200 rounded-2xl p-6">

              <div className="flex items-center justify-between">

                <h2 className="text-xl font-bold text-gray-900">
                  Personal Information
                </h2>

                {!isEditing && (
                  <button
                    onClick={handleEdit}
                    className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition"
                  >
                    Edit Profile
                  </button>
                )}

              </div>

              {isEditing ? (
                <div className="mt-6 space-y-5">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>

                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black resize-none"
                    />
                  </div>

                  <div className="flex gap-3">

                    <button
                      onClick={handleSave}
                      className="px-5 py-2.5 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
                    >
                      Save Changes
                    </button>

                    <button
                      onClick={handleCancel}
                      className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition"
                    >
                      Cancel
                    </button>

                  </div>

                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

                  <div>
                    <p className="text-sm text-gray-500">
                      Full Name
                    </p>

                    <p className="font-medium text-gray-900 mt-1">
                      {profile.name}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Email
                    </p>

                    <div className="flex items-center gap-2 mt-1">
                      <Mail size={16} className="text-gray-500" />

                      <p className="font-medium text-gray-900">
                        {profile.email}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Phone
                    </p>

                    <div className="flex items-center gap-2 mt-1">
                      <Phone size={16} className="text-gray-500" />

                      <p className="font-medium text-gray-900">
                        {profile.phone}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Address
                    </p>

                    <div className="flex items-center gap-2 mt-1">
                      <MapPin size={16} className="text-gray-500" />

                      <p className="font-medium text-gray-900">
                        {profile.address}
                      </p>
                    </div>
                  </div>

                </div>
              )}

            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    My Orders
                  </h2>

                  <p className="text-gray-500 text-sm mt-1">
                    Your recent orders will appear here
                  </p>
                </div>

                <Package
                  size={28}
                  className="text-gray-400"
                />

              </div>

              <div className="mt-6 border border-dashed border-gray-300 rounded-xl py-12 text-center">

                <Package
                  size={40}
                  className="mx-auto text-gray-300"
                />

                <h3 className="text-lg font-semibold text-gray-700 mt-4">
                  No orders yet
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Your placed orders will appear here.
                </p>

                <Link
                  to="/products"
                  className="inline-block mt-5 px-5 py-2.5 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
                >
                  Start Shopping
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;
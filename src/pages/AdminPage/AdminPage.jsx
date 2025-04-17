import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./../../firebase";
import {
  Copy,
  ExternalLink,
  Trash2,
  Check,
  X,
  LogOut,
  ShieldAlert,
  Calendar,
  User,
  Mail,
  Phone,
  AlertTriangle,
  Clock,
  Upload,
} from "lucide-react";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all"); // 'all', 'rejected', 'accepted-pending', 'accepted-uploaded'
  const [copiedLinkId, setCopiedLinkId] = useState(null);
  const [sortBy, setSortBy] = useState("timestamp"); // 'timestamp', 'name', 'rollNo'
  const [sortDirection, setSortDirection] = useState("desc"); // 'asc', 'desc'

  useEffect(() => {
    // Check if user is already authenticated (via localStorage)
    const storedAuth = localStorage.getItem("mechKgpAdminAuth");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }

    if (isAuthenticated) {
      fetchMaterials();
    }
  }, [isAuthenticated, statusFilter, sortBy, sortDirection]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("mechKgpAdminAuth", "true");
    } else {
      alert("Incorrect password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("mechKgpAdminAuth");
  };
  const copyMaterialStructure = (material) => {
    const template = `{
    title: '${material.subject}',
    link: '${material.driveLinks[0]}',
    // ${material.notes || "No notes provided"}
  },`;
    navigator.clipboard.writeText(template);
  };

  const fetchMaterials = async () => {
    setLoading(true);
    try {
      const materialsCollection = collection(db, "studyMaterials");
      const materialsSnapshot = await getDocs(materialsCollection);
      let materialsData = [];

      materialsSnapshot.forEach((doc) => {
        materialsData.push({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp
            ? doc.data().timestamp.toDate()
            : new Date(),
        });
      });

      // Apply filter
      if (statusFilter !== "all") {
        materialsData = materialsData.filter(
          (material) => material.status === statusFilter
        );
      }

      // Apply sorting
      materialsData.sort((a, b) => {
        if (sortBy === "timestamp") {
          return sortDirection === "asc"
            ? a.timestamp - b.timestamp
            : b.timestamp - a.timestamp;
        } else {
          // For text fields
          const aValue = a[sortBy]?.toLowerCase() || "";
          const bValue = b[sortBy]?.toLowerCase() || "";

          return sortDirection === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
      });

      setMaterials(materialsData);
    } catch (err) {
      console.error("Error fetching materials:", err);
      setError("Failed to load materials data");
    } finally {
      setLoading(false);
    }
  };

  const updateMaterialStatus = async (materialId, newStatus) => {
    try {
      const materialRef = doc(db, "studyMaterials", materialId);
      await updateDoc(materialRef, {
        status: newStatus,
      });

      // Update local state
      setMaterials((prevMaterials) =>
        prevMaterials.map((material) =>
          material.id === materialId
            ? { ...material, status: newStatus }
            : material
        )
      );
    } catch (err) {
      console.error("Error updating material status:", err);
      alert("Failed to update status");
    }
  };

  const deleteMaterial = async (materialId) => {
    if (
      window.confirm(
        "Are you sure you want to permanently delete this material?"
      )
    ) {
      try {
        await deleteDoc(doc(db, "studyMaterials", materialId));

        // Update local state
        setMaterials((prevMaterials) =>
          prevMaterials.filter((material) => material.id !== materialId)
        );
      } catch (err) {
        console.error("Error deleting material:", err);
        alert("Failed to delete material");
      }
    }
  };

  const copyToClipboard = (text, materialId, index) => {
    navigator.clipboard.writeText(text);

    // Set the ID of the copied link to show the "Copied!" feedback
    setCopiedLinkId(`${materialId}-${index}`);

    // Reset after 2 seconds
    setTimeout(() => {
      setCopiedLinkId(null);
    }, 2000);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const toggleSortDirection = (column) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDirection("desc");
    }
  };

  const getStatusDetails = (status) => {
    switch (status) {
      case "rejected":
        return {
          bgColor: "bg-red-100",
          textColor: "text-red-800",
          label: "Rejected",
        };
      case "accepted-pending":
        return {
          bgColor: "bg-yellow-100",
          textColor: "text-yellow-800",
          label: "Accepted - Yet to Upload",
        };
      case "accepted-uploaded":
        return {
          bgColor: "bg-green-100",
          textColor: "text-green-800",
          label: "Accepted - Uploaded",
        };
      default:
        return {
          bgColor: "bg-gray-100",
          textColor: "text-gray-800",
          label: status,
        };
    }
  };

  // Render login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 w-full max-w-md">
          <div className="flex items-center justify-center mb-6">
            <ShieldAlert size={48} className="text-yellow-400" />
          </div>
          <h1 className="text-2xl font-bold text-white text-center mb-6">
            Admin Access
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter admin password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold py-3 px-4 rounded-lg transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white mt-20">
      {/* Header */}
      <header className=" py-4 px-6 sticky top-0 z-10 ">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-yellow-400">
            Mekanika Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <LogOut size={18} className="mr-1" /> Logout
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="p-6">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl font-bold">Study Materials Management</h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
            >
              <option value="all">All Status</option>
              <option value="rejected">Rejected</option>
              <option value="accepted-pending">Accepted - Yet to Upload</option>
              <option value="accepted-uploaded">Accepted - Uploaded</option>
            </select>
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded mb-6 flex items-center">
            <AlertTriangle size={20} className="mr-2" />
            {error}
          </div>
        )}

        {/* Table of materials */}
        {!loading && !error && (
          <>
            <div className="mb-4 text-sm text-gray-400">
              {materials.length} material{materials.length !== 1 ? "s" : ""}{" "}
              found
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-800">
                  <thead className="bg-zinc-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer"
                        onClick={() => toggleSortDirection("timestamp")}
                      >
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          Submitted
                          {sortBy === "timestamp" && (
                            <span className="ml-1">
                              {sortDirection === "asc" ? "↑" : "↓"}
                            </span>
                          )}
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Semester
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Subject
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                      >
                        Links
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer"
                        onClick={() => toggleSortDirection("name")}
                      >
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          Name
                          {sortBy === "name" && (
                            <span className="ml-1">
                              {sortDirection === "asc" ? "↑" : "↓"}
                            </span>
                          )}
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer"
                        onClick={() => toggleSortDirection("rollNo")}
                      >
                        <div className="flex items-center">
                          Roll No
                          {sortBy === "rollNo" && (
                            <span className="ml-1">
                              {sortDirection === "asc" ? "↑" : "↓"}
                            </span>
                          )}
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                      >
                        Contact Info
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                      >
                        note
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {materials.length === 0 ? (
                      <tr>
                        <td
                          colSpan="9"
                          className="px-6 py-12 text-center text-gray-400"
                        >
                          No materials found matching the current filter
                        </td>
                      </tr>
                    ) : (
                      materials.map((material) => (
                        <tr key={material.id} className="hover:bg-zinc-800/50">
                          {/* Timestamp */}
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {formatDate(material.timestamp)}
                          </td>
                          
                          {/* Semester */}
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {material.semester}
                          </td>
                          
                          {/* Subject */}
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {material.subject}
                          </td>
                          
                          {/* Links */}
                          <td className="px-6 py-4">
                            <div className="flex flex-col space-y-2">
                              {material.driveLinks.map((link, index) => (
                                <div key={index} className="flex items-center">
                                  <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-yellow-400 hover:text-yellow-300 text-sm truncate max-w-xs flex items-center"
                                  >
                                    <ExternalLink
                                      size={14}
                                      className="mr-1 flex-shrink-0"
                                    />
                                    <span className="truncate">
                                      Link{" "}
                                      {material.driveLinks.length > 1
                                        ? index + 1
                                        : ""}
                                    </span>
                                  </a>

                                  <button
                                    onClick={() =>
                                      copyToClipboard(link, material.id, index)
                                    }
                                    className="ml-2 text-gray-400 hover:text-white transition-colors"
                                    title="Copy link"
                                  >
                                    {copiedLinkId ===
                                    `${material.id}-${index}` ? (
                                      <Check
                                        size={14}
                                        className="text-green-400"
                                      />
                                    ) : (
                                      <Copy size={14} />
                                    )}
                                  </button>
                                </div>
                              ))}
                            </div>
                          </td>
                          
                          {/* Status */}
                          <td className="px-6 py-4 whitespace-nowrap">
                            {(() => {
                              const statusInfo = getStatusDetails(
                                material.status
                              );
                              return (
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusInfo.bgColor} ${statusInfo.textColor}`}
                                >
                                  {statusInfo.label}
                                </span>
                              );
                            })()}
                          </td>
                          
                          {/* Actions */}
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              {/* <button
                                onClick={() => copyMaterialStructure(material)}
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                                title="Copy as code"
                              >
                                <Copy size={18} />
                              </button>
                               */}
                              {material.status !== "accepted-pending" && (
                                <button
                                  onClick={() =>
                                    updateMaterialStatus(
                                      material.id,
                                      "accepted-pending"
                                    )
                                  }
                                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                                  title="Accept - Yet to Upload"
                                >
                                  <Check size={18} />
                                </button>
                              )}

                              {material.status !== "accepted-uploaded" && (
                                <button
                                  onClick={() =>
                                    updateMaterialStatus(
                                      material.id,
                                      "accepted-uploaded"
                                    )
                                  }
                                  className="text-green-400 hover:text-green-300 transition-colors"
                                  title="Accept - Uploaded"
                                >
                                  <Upload size={18} />
                                </button>
                              )}

                              {material.status !== "rejected" && (
                                <button
                                  onClick={() =>
                                    updateMaterialStatus(
                                      material.id,
                                      "rejected"
                                    )
                                  }
                                  className="text-red-400 hover:text-red-300 transition-colors"
                                  title="Reject"
                                >
                                  <X size={18} />
                                </button>
                              )}

                              <button
                                onClick={() => deleteMaterial(material.id)}
                                className="text-gray-400 hover:text-red-400 transition-colors"
                                title="Delete"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                          
                          {/* Name */}
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                            {material.name}
                          </td>
                          
                          {/* Roll No */}
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {material.rollNo}
                          </td>
                          
                          {/* Contact Info */}
                          <td className="px-6 py-4 text-sm text-gray-300">
                            <div className="flex flex-col space-y-1">
                              <div className="flex items-center">
                                <Mail
                                  size={14}
                                  className="mr-1 text-gray-400"
                                />
                                {material.email}
                              </div>
                              {material.contactNo && (
                                <div className="flex items-center">
                                  <Phone
                                    size={14}
                                    className="mr-1 text-gray-400"
                                  />
                                  {material.contactNo}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {material.notes || "No notes provided"}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default AdminPage;
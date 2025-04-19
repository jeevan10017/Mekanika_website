import { useState, useEffect ,useRef } from "react";
import { X, Plus, Book, ArrowRight, Check, Upload } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export default function ContributeModal({ isOpen, onClose, refreshList }) {
const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    rollNo: "",
    driveLinks: [""],
    contactNo: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLinkChange = (index, value) => {
    const updatedLinks = [...formData.driveLinks];
    updatedLinks[index] = value;
    setFormData({ ...formData, driveLinks: updatedLinks });
  };

  const addLinkField = () => {
    setFormData({ ...formData, driveLinks: [...formData.driveLinks, ""] });
  };

  const removeLinkField = (index) => {
    const updatedLinks = formData.driveLinks.filter((_, i) => i !== index);
    setFormData({ ...formData, driveLinks: updatedLinks });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const submissionData = {
        ...formData,
        timestamp: serverTimestamp(),
        status: "pending",
      };
      console.log("Submitting data:", submissionData);
      await addDoc(collection(db, "studyMaterials"), submissionData);

      setSubmitted(true);
      setFormData({
        email: "",
        name: "",
        rollNo: "",
        driveLinks: [""],
        contactNo: "",
        semester: "",
        subject: "",
        notes: "",
      });

    } catch (err) {
      setError("Failed to submit form. Please try again.");
      console.error("Error submitting form:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      email: '',
      name: '',
      rollNo: '',
      driveLinks: [''],
      contactNo: '',
      semester: '',
      subject: '',
      notes: ''
    });
    setSubmitted(false);
    setError(null);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm transition-all"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div
          className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          ref={modalRef}
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center p-6 border-b border-zinc-800">
            <div className="flex items-center">
              <Book size={24} className="text-yellow-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">
                Contribute Study Materials
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6">
            {submitted ? (
              <div className="text-center py-8">
                <div className="h-16 w-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={32} className="text-zinc-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-300 mb-6">
                  Your contribution to the Mech KGP Legacy has been successfully
                  submitted. Your materials will help future generations of
                  Mechies!
                </p>
                <button
                  onClick={onClose}
                  className="bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold py-3 px-6 rounded-lg transition-all"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6 text-gray-300 text-sm">
                  <p>
                  Sharing your study materials helps build a stronger, more collaborative our Dep at IIT Kharagpur. By contributing notes, slides, or past papers, you’re supporting your peers and future Mechies on their academic journey
                  </p>
                </div>

                {error && (
                  <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded mb-6">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    {/* Email */}
                    <div>
                      <label
                        className="block text-gray-300 font-medium mb-1 text-sm"
                        htmlFor="email"
                      >
                        Email <span className="text-yellow-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                        placeholder="your.email@kgpian.iitkgp.ac.in"
                      />
                    </div>

                    {/* Name */}
                    <div>
                      <label
                        className="block text-gray-300 font-medium mb-1 text-sm"
                        htmlFor="name"
                      >
                        Name <span className="text-yellow-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Roll No */}
                    <div>
                      <label
                        className="block text-gray-300 font-medium mb-1 text-sm"
                        htmlFor="rollNo"
                      >
                        Roll No <span className="text-yellow-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="rollNo"
                        name="rollNo"
                        value={formData.rollNo}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                        placeholder="22ME10XXX"
                      />
                    </div>

                    {/* Drive Links */}
                    <div>
                      <label className="block text-gray-300 font-medium mb-1 text-sm">
                        Drive Links <span className="text-yellow-400">*</span>
                      </label>
                      <p className="text-gray-400 text-xs mb-2">
                        Don't forget to give access to our mail ids:
                        mekanika2022@gmail.com and
                        jeevankumarkorra@kgpian.iitkgp.ac.in
                      </p>

                      {formData.driveLinks.map((link, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <input
                            type="url"
                            value={link}
                            onChange={(e) =>
                              handleLinkChange(index, e.target.value)
                            }
                            required
                            className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                            placeholder="Google Drive or OneDrive link"
                          />
                          {formData.driveLinks.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeLinkField(index)}
                              className="bg-zinc-800 hover:bg-zinc-700 text-gray-300 rounded-lg p-2"
                            >
                              <X size={18} />
                            </button>
                          )}
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={addLinkField}
                        className="flex items-center text-yellow-400 hover:text-yellow-300 font-medium mt-1 text-sm"
                      >
                        <Plus size={16} className="mr-1" /> Add another link
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 font-medium mb-1 text-sm">
                          Semester <span className="text-yellow-400">*</span>
                        </label>
                        <select
                          value={formData.semester}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              semester: e.target.value,
                            })
                          }
                          required
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                        >
                          <option value="">Select Semester</option>
                          {[...Array(8).keys()].map((n) => (
                            <option key={n + 1} value={`Semester ${n + 1}`}>
                              Semester {n + 1}
                            </option>
                          ))}
                          <option value="Breadth Electives">
                            Breadth Electives
                          </option>
                          <option value="Breadth Electives">Others</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-300 font-medium mb-1 text-sm">
                          Subject <span className="text-yellow-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          required
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                          placeholder="Subject name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 font-medium mb-1 text-sm">
                        Notes
                      </label>
                      <textarea
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                        placeholder="Additional notes or comments (optional)"
                        rows="3"
                      />
                    </div>
                    {/* Contact No */}
                    <div>
                      <label
                        className="block text-gray-300 font-medium mb-1 text-sm"
                        htmlFor="contactNo"
                      >
                        Contact No
                      </label>
                      <input
                        type="tel"
                        id="contactNo"
                        name="contactNo"
                        value={formData.contactNo}
                        onChange={handleChange}
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                        placeholder="Your contact number (optional)"
                      />
                    </div>

                    {/* Form Actions */}
                    <div className="flex gap-3 pt-4">
                    <button
                        type="button"
                        onClick={resetForm}
                        className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-gray-300 font-bold py-2 px-4 rounded-lg transition-all text-sm"
                      >
                        Clear Form
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-all disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                      >
                        {submitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-zinc-900"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Submit <ArrowRight size={16} className="ml-2" />
                          </span>
                        )}
                      </button>
                      
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

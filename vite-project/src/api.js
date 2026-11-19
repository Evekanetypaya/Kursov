const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export async function fetchHealth() {
  try {
    const res = await fetch(`${API_URL}/health`);
    if (!res.ok) throw new Error("Health check failed");
    return await res.json();
  } catch (err) {
    console.warn("API health check unavailable, using local state", err);
    return null;
  }
}

export async function fetchServices() {
  try {
    const res = await fetch(`${API_URL}/services`);
    if (!res.ok) throw new Error("Failed to fetch services");
    return await res.json();
  } catch (err) {
    console.warn("API unavailable, fallback to default services", err);
    return null;
  }
}

export async function fetchProcedures() {
  try {
    const res = await fetch(`${API_URL}/procedures`);
    if (!res.ok) throw new Error("Failed to fetch procedures");
    return await res.json();
  } catch (err) {
    console.warn("API unavailable, fallback to default procedures", err);
    return null;
  }
}

export async function fetchSpecialists() {
  try {
    const res = await fetch(`${API_URL}/specialists`);
    if (!res.ok) throw new Error("Failed to fetch specialists");
    return await res.json();
  } catch (err) {
    console.warn("API unavailable, fallback to default specialists", err);
    return null;
  }
}

export async function fetchTestimonials() {
  try {
    const res = await fetch(`${API_URL}/testimonials`);
    if (!res.ok) throw new Error("Failed to fetch testimonials");
    return await res.json();
  } catch (err) {
    console.warn("API unavailable, fallback to default testimonials", err);
    return null;
  }
}

export async function createAppointment(appointmentData) {
  const res = await fetch(`${API_URL}/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appointmentData),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Ошибка при сохранении записи");
  }
  return await res.json();
}
